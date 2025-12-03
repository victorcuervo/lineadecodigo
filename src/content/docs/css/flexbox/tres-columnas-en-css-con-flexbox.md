---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ34CKGJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCXe%2B0P6PbK5xBir9yKaFUWsRtZQZAKjz1EtSFH4QkhcwIhAMkiHnPK6b3e2i0MaP0%2Bsjyxr6g3Pd%2FHT%2F3mtyb92IWtKv8DCDgQABoMNjM3NDIzMTgzODA1IgyVH5chuSMdrJ9U8OMq3AMFA%2B1L%2BFSYVkTTrY1ywDJDPClrfB3ZB2C8DOQsBtf5L5aLnvkYKuok92pKR6sHENSDYc12DTXlOivXrsnORRSS2HxzdLZYuX5iFEj41gCDe0lgQ%2F31OVlFHqK7UqLzaDfSmNepEkpapzWf%2B%2F0L%2F5AT2bDry7GkaCYLnNrxCitxvmK4oHQUQ4TuA2TUxCgcU9sBFtXqEMOrJcHhvV6kWGqEMEeXvJcBe6GwRjRM8Wr%2BgGb%2B9Xa%2B%2BZH6cEkwS4kbGVpcsxVubaId78oxredwfsTnanVXYAqZ8KztWy8321MdKwveJMAsfnoLSbiKXFQYLifylNr3GNF%2BYo2P7xN%2B95KzJlcZ9oMwJUTDm4qbWUD%2Fkr4J4z9RInSD556FvEozM8CuyxdsUEKipuDQ0vjD0qNwRB%2BWhmIBd5cqZs5zsmBbY4%2FKwBBcjnnKPT8kRbo2bHoMIWV%2FpQWhncicLuGGL0z4G1YO7gVz1KumJvbC5jiOMHKVeTMCz1pXQP1BlKoPOV8D5QfwEReVSJ0%2FFvGf597PnXwtgSyswPJXup%2FLITYsoQTmd3AlXANFwoY45NF1CfNDMxZaKZumo2OYyTJpMDkizRh4ZfA0whni7ClR0k8oD09HKdYqV8dk3RSxfTDM%2BMLJBjqkAW6zc1z2UIIv%2FZOXoaJxwWD6MOeK5x6JLeNczJ4WphIA9F1SNP%2FDwwFxwe2eLlbGs517IcPs6HEvLa1AZeNnpeub4lV7uYnJZg%2FFjmw2C%2BqjfFNcZsoBI9sjHauFl3%2BeNKN03mdnp43PrTpGmwN9XVMwUaQlAGRifqfcQn3APQwSHFAvUhU87hZ3nqjMtavU87Bq0VISa%2FH5q3v%2Bs6FPiCEoJLFI&X-Amz-Signature=0b29218958265d8287ce631d3a747196a694573b1f23f8a64411c535c997109e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ34CKGJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCXe%2B0P6PbK5xBir9yKaFUWsRtZQZAKjz1EtSFH4QkhcwIhAMkiHnPK6b3e2i0MaP0%2Bsjyxr6g3Pd%2FHT%2F3mtyb92IWtKv8DCDgQABoMNjM3NDIzMTgzODA1IgyVH5chuSMdrJ9U8OMq3AMFA%2B1L%2BFSYVkTTrY1ywDJDPClrfB3ZB2C8DOQsBtf5L5aLnvkYKuok92pKR6sHENSDYc12DTXlOivXrsnORRSS2HxzdLZYuX5iFEj41gCDe0lgQ%2F31OVlFHqK7UqLzaDfSmNepEkpapzWf%2B%2F0L%2F5AT2bDry7GkaCYLnNrxCitxvmK4oHQUQ4TuA2TUxCgcU9sBFtXqEMOrJcHhvV6kWGqEMEeXvJcBe6GwRjRM8Wr%2BgGb%2B9Xa%2B%2BZH6cEkwS4kbGVpcsxVubaId78oxredwfsTnanVXYAqZ8KztWy8321MdKwveJMAsfnoLSbiKXFQYLifylNr3GNF%2BYo2P7xN%2B95KzJlcZ9oMwJUTDm4qbWUD%2Fkr4J4z9RInSD556FvEozM8CuyxdsUEKipuDQ0vjD0qNwRB%2BWhmIBd5cqZs5zsmBbY4%2FKwBBcjnnKPT8kRbo2bHoMIWV%2FpQWhncicLuGGL0z4G1YO7gVz1KumJvbC5jiOMHKVeTMCz1pXQP1BlKoPOV8D5QfwEReVSJ0%2FFvGf597PnXwtgSyswPJXup%2FLITYsoQTmd3AlXANFwoY45NF1CfNDMxZaKZumo2OYyTJpMDkizRh4ZfA0whni7ClR0k8oD09HKdYqV8dk3RSxfTDM%2BMLJBjqkAW6zc1z2UIIv%2FZOXoaJxwWD6MOeK5x6JLeNczJ4WphIA9F1SNP%2FDwwFxwe2eLlbGs517IcPs6HEvLa1AZeNnpeub4lV7uYnJZg%2FFjmw2C%2BqjfFNcZsoBI9sjHauFl3%2BeNKN03mdnp43PrTpGmwN9XVMwUaQlAGRifqfcQn3APQwSHFAvUhU87hZ3nqjMtavU87Bq0VISa%2FH5q3v%2Bs6FPiCEoJLFI&X-Amz-Signature=76b100819d0da9d301a3060da3e10649775249a6073ced28982a8102295702fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

