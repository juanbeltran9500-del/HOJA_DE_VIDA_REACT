
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

type Props = {
  textoBoton: string;
  colorBoton: string;
  onPress: () => void;
};

export default function MiBoton({
  textoBoton,
  colorBoton,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={[estilos.boton, { backgroundColor: colorBoton }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={estilos.texto}>
        {textoBoton}
      </Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  boton: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
