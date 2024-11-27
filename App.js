import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card, IconButton } from 'react-native-paper';


const movies = [
  { title: 'Audifono 1', image: 'https://f.fcdn.app/imgs/a311ff/www.tiendascorripio.com.do/corrdo/3527/original/catalogo/AA-AW799BT_001_1/1920-1200/audifonos-bluetooth-con-microfono-diseno-plegable-y-portatil-001.jpg', description: 'Descripción de Audifono  1' },
  { title: 'Audifono  2', image: 'https://i.blogs.es/5bbbf5/plantilla-imagenes-44-/1366_2000.jpeg', description: 'Descripción de Audifono 2' },
  { title: ' Audifono 3', image: 'https://todosellerccs.com/wp-content/uploads/2024/02/Audifonos-Bluetooth-Power-Bank-M90-MAX.webp', description: 'Descripción de Audifono  3' },
  { title: 'Audifono 4', image: 'https://www.redlemon.com.mx/cdn/shop/files/01_35f4d774-11e8-479c-9229-c8d6612c8b43.jpg?v=1716240844&width=1000', description: 'Descripción de Película 4' },
  { title: 'Audifono  5', image: 'https://media.a24.com/p/fb7727dc547c1dbf6daa6290f585f1cd/adjuntos/296/imagenes/008/007/0008007396/que-funciones-tienen-los-mejores-auriculares-bluetooth.jpeg', description: 'Descripción de Audifono  5' },
  { title: 'Audifono  6', image: 'https://http2.mlstatic.com/D_NQ_NP_602253-MLU78068395755_072024-O.webp', description: 'Descripción de Audifono  6' },
];

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [viewFavorites, setViewFavorites] = useState(false);

  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(movie)
        ? prevFavorites.filter((fav) => fav !== movie)
        : [...prevFavorites, movie]
    );
  };

  const showDescription = (movie) => {
    setSelectedMovie(movie);
  };

  const displayedMovies = viewFavorites ? favorites : movies;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>App Audifonos johansitoweb</Text>
          <TouchableOpacity onPress={() => setViewFavorites(!viewFavorites)}>
            <Text style={styles.favoritesText}>{viewFavorites ? 'Ver Todas' : 'Ver Favoritas'}</Text>
          </TouchableOpacity>
        </View>
        {selectedMovie ? (
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>{selectedMovie.title}</Text>
            <Text style={styles.descriptionText}>{selectedMovie.description}</Text>
            <Image source={{ uri: selectedMovie.image }} style={styles.descriptionImage} />
          </View>
        ) : (
          <View style={styles.moviesContainer}>
            {displayedMovies.map((movie, index) => (
              <Card key={index} style={styles.card}>
                <Image source={{ uri: movie.image }} style={styles.cardImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle} onPress={() => showDescription(movie)}>{movie.title}</Text>
                  <IconButton
                    icon={favorites.includes(movie) ? 'heart' : 'heart-outline'}
                    color={favorites.includes(movie) ? 'red' : 'white'}
                    size={20}
                    onPress={() => toggleFavorite(movie)}
                  />
                </View>
              </Card>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 8,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  favoritesText: {
    fontSize: 18,
    color: '#ffffff',
    marginTop: 10,
  },
  moviesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: '#333333',
    marginBottom: 20,
    width: '45%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  descriptionContainer: {
    alignItems: 'center',
    padding: 20,
  },
  descriptionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 20,
  },
  descriptionImage: {
    width: 200,
    height: 300,
  },
});