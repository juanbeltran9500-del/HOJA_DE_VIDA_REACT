
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

type Props = {
  titulo: string;
  descripcion: string;
  detalle: string;
  icono: React.ComponentProps<typeof Ionicons>['name'];
};

export default function TarjetaHobby({
  titulo,
  descripcion,
  detalle,
  icono,
}: Props) {
  return (
    <TouchableOpacity
      style={estilos.tarjeta}
      activeOpacity={0.8}
      onPress={() => Alert.alert(titulo, detalle)}
    >
      <View style={estilos.encabezado}>
        <Ionicons
          name={icono}
          size={30}
          color="#2563EB"
        />
        <Text style={estilos.titulo}>{titulo}</Text>
      </View>

      <Text style={estilos.descripcion}>
        {descripcion}
      </Text>

      <Text style={estilos.indicacion}>
        Toca para ver más información
      </Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginVertical: 9,
    borderWidth: 1,
    borderColor: '#DCE5F0',
    elevation: 3,
  },
  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#214D80',
    marginLeft: 12,
  },
  descripcion: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 21,
  },
  indicacion: {
    fontSize: 12,
    color: '#2563EB',
    marginTop: 12,
  },
});
