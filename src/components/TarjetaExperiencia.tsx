
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
};

export default function TarjetaExperiencia({
  cargo,
  empresa,
  periodo,
  descripcion,
}: Props) {
  return (
    <View style={estilos.tarjeta}>
      <View style={estilos.encabezado}>
        <Ionicons
          name="briefcase-outline"
          size={26}
          color="#2563EB"
        />

        <Text style={estilos.cargo}>
          {cargo}
        </Text>
      </View>

      <Text style={estilos.empresa}>
        {empresa}
      </Text>

      <Text style={estilos.periodo}>
        {periodo}
      </Text>

      <Text style={estilos.descripcion}>
        {descripcion}
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#DCE5F0',
    elevation: 3,
  },
  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cargo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#214D80',
    marginLeft: 10,
    flex: 1,
  },
  empresa: {
    fontSize: 15,
    fontWeight: '600',
    color: '#334155',
  },
  periodo: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 5,
  },
  descripcion: {
    fontSize: 14,
    color: '#475569',
    marginTop: 10,
    lineHeight: 21,
  },
});
