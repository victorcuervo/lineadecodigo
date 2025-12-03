---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVPFPJMY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFaQNbNMdHiR8lojpsUz%2FWoQul0TOi8k34UNHV6VWOAbAiB0g1rBSdISJ2TwbJkr9Ae6OsbDLo7gbUuxQ8KqJ4MuSSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMGTwUT9XRvoN%2BZHhkKtwDszj8LYygnIzQEypgirmufNW5h%2BHcpT%2BrL9r7ZoDBeTH5G67iKFKN40M44pMlxFZXx1e%2BjtdCIYVEnRCtXLux2aAmK9l8xlWwa5Lz3SDZQjiHaRpJLnaJ6ch4ojHcRqHmsJj8Jwo7LEjmi4QtYoZC0PYl78pU6P7%2FRvjkQCkiEFVQSTKt8f8iZ8go9Z3%2F5DuMOTZuA08hhoUrNTu9VMc5xT0mreeVN%2FeqaOj32haPde%2FZldfdn7fR88N1xNLBKWz3%2BKIfKIgMqLlkKm%2BHSVF6irck0pFJHP16yvrA59XJfKmFonxjYunYSzKE5HW%2Bh0odweFVgStNQLIYxzUGq8kbNAWc3e%2Fi4KBojHpbAFZjlipXnKVAbMy5%2B1bLusjgS5gn%2FQmnBzAxZcManpu2N2c9vm%2FrybypvgFExpwdYgB%2FMzdKSqORp0dW4kjVlHio%2BCSk0F20EVg6qd0Bwk4YZ%2FGG87a8fyJEg12ALWbaPknrgU5aVmYOoZsqdgvwBF41AMP6mV1u%2BP5BeB%2BRiwrwQb30Ch0V7s3XSA3pYXa9qJhA8ZDVevYTss41FTQb9eOr0bmoS08oxhUYs3IR1FNyyReDu0ruHT74luMywwzTY291sd5q7FOayhtEkp6MvtkwwunAyQY6pgGS81%2Bz%2BiWGYqC4HarpVliOK%2FY4TSN3FKyV6M80xV1uXMKxQM%2F32nX8FGncMeV2Zo0kcn8t1Zv5v379AD4IboQNkWTfqD44ECrouAJvxjPSfGsCGnkCuyhNaB1iXjGUsn9vF8eOiLKPOSYqFFMiEUD%2FnSgOOwf4ivQgkMmvim8rw7EugxKJxPJhb7mJfYPcqQ%2F9UqiqNmq%2BA4TfUHYib5q2TDfPneNu&X-Amz-Signature=94864ae2042efce6c353748694892e4f3602c89c3f10f0ce17d11a1cca741eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVPFPJMY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFaQNbNMdHiR8lojpsUz%2FWoQul0TOi8k34UNHV6VWOAbAiB0g1rBSdISJ2TwbJkr9Ae6OsbDLo7gbUuxQ8KqJ4MuSSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMGTwUT9XRvoN%2BZHhkKtwDszj8LYygnIzQEypgirmufNW5h%2BHcpT%2BrL9r7ZoDBeTH5G67iKFKN40M44pMlxFZXx1e%2BjtdCIYVEnRCtXLux2aAmK9l8xlWwa5Lz3SDZQjiHaRpJLnaJ6ch4ojHcRqHmsJj8Jwo7LEjmi4QtYoZC0PYl78pU6P7%2FRvjkQCkiEFVQSTKt8f8iZ8go9Z3%2F5DuMOTZuA08hhoUrNTu9VMc5xT0mreeVN%2FeqaOj32haPde%2FZldfdn7fR88N1xNLBKWz3%2BKIfKIgMqLlkKm%2BHSVF6irck0pFJHP16yvrA59XJfKmFonxjYunYSzKE5HW%2Bh0odweFVgStNQLIYxzUGq8kbNAWc3e%2Fi4KBojHpbAFZjlipXnKVAbMy5%2B1bLusjgS5gn%2FQmnBzAxZcManpu2N2c9vm%2FrybypvgFExpwdYgB%2FMzdKSqORp0dW4kjVlHio%2BCSk0F20EVg6qd0Bwk4YZ%2FGG87a8fyJEg12ALWbaPknrgU5aVmYOoZsqdgvwBF41AMP6mV1u%2BP5BeB%2BRiwrwQb30Ch0V7s3XSA3pYXa9qJhA8ZDVevYTss41FTQb9eOr0bmoS08oxhUYs3IR1FNyyReDu0ruHT74luMywwzTY291sd5q7FOayhtEkp6MvtkwwunAyQY6pgGS81%2Bz%2BiWGYqC4HarpVliOK%2FY4TSN3FKyV6M80xV1uXMKxQM%2F32nX8FGncMeV2Zo0kcn8t1Zv5v379AD4IboQNkWTfqD44ECrouAJvxjPSfGsCGnkCuyhNaB1iXjGUsn9vF8eOiLKPOSYqFFMiEUD%2FnSgOOwf4ivQgkMmvim8rw7EugxKJxPJhb7mJfYPcqQ%2F9UqiqNmq%2BA4TfUHYib5q2TDfPneNu&X-Amz-Signature=67c51d1242dc99df0f13b2bdbfba8b4f7bffba8992d339d23002a29c33be0540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

