
import { Ionicons } from '@expo/vector-icons';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import TarjetaHobby from '../components/TarjetaHobby';

export default function Hobbies() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Ionicons
          name="heart-outline"
          size={65}
          color="#2563EB"
        />

        <Text style={estilos.nombre}>
          Juan Beltrán
        </Text>

        <Text style={estilos.subtitulo}>
          Mis Intereses y Pasatiempos
        </Text>
      </View>

      <TarjetaHobby
        titulo="Programación"
        descripcion="Aprender nuevas tecnologías y crear aplicaciones."
        detalle="Me gusta desarrollar proyectos de software, explorar React Native y mejorar mis habilidades de programación."
        icono="code-slash-outline"
      />

      <TarjetaHobby
        titulo="Videojuegos"
        descripcion="Disfrutar de videojuegos en mi tiempo libre."
        detalle="Me gustan los videojuegos de estrategia y acción, especialmente Call of Duty Mobile."
        icono="game-controller-outline"
      />

      <TarjetaHobby
        titulo="Tecnología"
        descripcion="Conocer dispositivos y herramientas tecnológicas."
        detalle="Me interesa investigar sobre celulares, computadores y nuevas herramientas digitales."
        icono="laptop-outline"
      />

      <TarjetaHobby
        titulo="Aprender Inglés"
        descripcion="Practicar inglés y desarrollar nuevas habilidades."
        detalle="Me interesa mejorar mi nivel de inglés para ampliar mis oportunidades académicas y profesionales."
        icono="language-outline"
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  contenido: {
    padding: 20,
    paddingBottom: 35,
  },
  encabezado: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 25,
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#214D80',
    marginTop: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#64748B',
    marginTop: 5,
  },
});
