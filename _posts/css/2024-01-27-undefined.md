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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM3KM54J%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIAYwaAUm5SE7LBSjgXBh6fEPbZdk9alLpj8DZHaw%2FT4FAiEA6om%2FOqcKPYiOLUeEPylv8W5IZhVlcu6rFJAJnZo3giEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDEAk6SDKWo5EN%2By9OircA%2BmVLGX95sgu6428HeHS7IVWEQYV866cxMBtsRNMbuF3ZggY%2B7AFSCTt43QJhq7%2B7ibwv9YT9gjKAock8IqjbY4UZu3F0tkVIyIUwx5bIybma7wN55Mm1fO32%2FeM4gH047R9tUmAz%2FKa7Jn%2FzlC0eurHzzodhAP3Jz30V67WSA5hLsxFiQuTxvNy3IMuvcH4rK%2BJ9WvVYX7C42V6XVglJt7dpDQJAatky6bFvDxEBaz6t823Y2uNUqSr%2BRMlV2FC3WuzkkMuB71pjAQOrKlNT9pMVy%2Bdku6TRTFKmW%2FPNimy%2BSajA8W0o9xNHH1gyIDrXX4V7TppLskvtPOIX%2Fvxge7DIzJ24R%2FOrwCsXMb8h6FeNvjj746bF7vTp1J83%2BeWZbanEbR0ivlvUz8v0q8f1OstpWC%2FygzeZDYJnoY6TUWwaSHYfkMGusm37cSoSPpftV4zPlJDGk9GGp2tnGYEeM1MoIhThNEG%2BUiVzz0RTEbOrxXzf9S8porP%2FrJ5hN6qh%2B41Z7HmH8L7h6e8SxN%2F5dtG1lCpSeZvV7CCtTukdMix47kkgiyjEK2SoahrAO6BBJ5R%2Be4rWzGLHtEmZnUHKp0CbeRidu1cS7JXmIyxhucjgej0uDkmIf2TEhC4MKzBwckGOqUBoVnGIMHt4R%2BAQlr3u4jFtW%2BcmUAGQxgrjl20G34yHPaaGqXR71tD6M4RqoU54t2KoZWcIAUpkmBqseSvc2mKJr0JW0FmsqeTLu4JP6CdGljln5kGElPgCxCv74Jtia2HOPF6xC6rXGTdTJZxStJhRYBwnAkMMbTbymVyLpdM7Vm2IYKdvkat5xJ0mDvwim9VbWle8L8H3F4eO3PvEROjGQpLFZjP&X-Amz-Signature=2975827591eb70cacc5c1994c6d562e5560349edcbf9698c98a7858d537a4bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM3KM54J%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIAYwaAUm5SE7LBSjgXBh6fEPbZdk9alLpj8DZHaw%2FT4FAiEA6om%2FOqcKPYiOLUeEPylv8W5IZhVlcu6rFJAJnZo3giEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDEAk6SDKWo5EN%2By9OircA%2BmVLGX95sgu6428HeHS7IVWEQYV866cxMBtsRNMbuF3ZggY%2B7AFSCTt43QJhq7%2B7ibwv9YT9gjKAock8IqjbY4UZu3F0tkVIyIUwx5bIybma7wN55Mm1fO32%2FeM4gH047R9tUmAz%2FKa7Jn%2FzlC0eurHzzodhAP3Jz30V67WSA5hLsxFiQuTxvNy3IMuvcH4rK%2BJ9WvVYX7C42V6XVglJt7dpDQJAatky6bFvDxEBaz6t823Y2uNUqSr%2BRMlV2FC3WuzkkMuB71pjAQOrKlNT9pMVy%2Bdku6TRTFKmW%2FPNimy%2BSajA8W0o9xNHH1gyIDrXX4V7TppLskvtPOIX%2Fvxge7DIzJ24R%2FOrwCsXMb8h6FeNvjj746bF7vTp1J83%2BeWZbanEbR0ivlvUz8v0q8f1OstpWC%2FygzeZDYJnoY6TUWwaSHYfkMGusm37cSoSPpftV4zPlJDGk9GGp2tnGYEeM1MoIhThNEG%2BUiVzz0RTEbOrxXzf9S8porP%2FrJ5hN6qh%2B41Z7HmH8L7h6e8SxN%2F5dtG1lCpSeZvV7CCtTukdMix47kkgiyjEK2SoahrAO6BBJ5R%2Be4rWzGLHtEmZnUHKp0CbeRidu1cS7JXmIyxhucjgej0uDkmIf2TEhC4MKzBwckGOqUBoVnGIMHt4R%2BAQlr3u4jFtW%2BcmUAGQxgrjl20G34yHPaaGqXR71tD6M4RqoU54t2KoZWcIAUpkmBqseSvc2mKJr0JW0FmsqeTLu4JP6CdGljln5kGElPgCxCv74Jtia2HOPF6xC6rXGTdTJZxStJhRYBwnAkMMbTbymVyLpdM7Vm2IYKdvkat5xJ0mDvwim9VbWle8L8H3F4eO3PvEROjGQpLFZjP&X-Amz-Signature=de25eb4cf00ce2e3bdbede67398948e86f37d599233edb4f5cd9ff78f2658c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

