import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Background } from '@/components/Background';
import { Button } from '@/components/Button';
import { CategorySelect } from '@/components/CategorySelect';
import { GuildSelect } from '@/components/GuildSelect';
import { Header } from '@/components/Header';
import { SmallInput } from '@/components/SmallInput';
import { TextArea } from '@/components/TextArea';
import { selectedGuild } from '@/data/mock';
import { styles } from './styles';

export function AppointmentCreate() {
  // Estado da categoria: ao tocar num card, ele fica marcado e os outros apagados
  const [category, setCategory] = useState('');
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Background>
        <Header title="Agendar partida" />

        <ScrollView
          contentContainerStyle={{ paddingBottom: insets.bottom + 56 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={[styles.label, styles.categoryLabel]}>Categoria</Text>

          <CategorySelect hasCheckBox categorySelected={category} setCategory={setCategory} />

          <View style={styles.form}>
            {/* estado "Servidor selecionado" (o modal da lista não faz parte da atividade) */}
            <GuildSelect guild={selectedGuild} />

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, styles.fieldLabel]}>Dia e mês</Text>
                <View style={styles.row}>
                  <SmallInput />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput />
                </View>
              </View>

              <View>
                <Text style={[styles.label, styles.fieldLabel]}>Hora e minuto</Text>
                <View style={styles.row}>
                  <SmallInput />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput />
                </View>
              </View>
            </View>

            <View style={[styles.field, styles.descriptionHeader]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.charLimit}>Max 100 caracteres</Text>
            </View>

            <TextArea maxLength={100} numberOfLines={5} autoCorrect={false} />

            <View style={styles.footer}>
              <Button title="Agendar" onPress={() => router.back()} />
            </View>
          </View>
        </ScrollView>
      </Background>
    </KeyboardAvoidingView>
  );
}
