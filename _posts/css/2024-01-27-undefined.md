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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEVCMWY6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCZ1LkS69B1O5nbn8mUsVGzSmahp6%2Bw0W46aVCwxBICDgIhAOKfK%2F7spaEDlwqx1voJndzn3tmhOjENGmCo11K%2FRRj5Kv8DCC4QABoMNjM3NDIzMTgzODA1IgwVOiaJh5Px9W5iDTkq3APvKOiFXYIg4w5a0YTiVIav67668pqd1Yo1%2Bm%2Bq3VWRKhSWdIrXPdCCoCR4DViFrSyOr8TH9hr%2FjphTW4Z7rtiy4RiONBblkSYDRuQXz8p0zKoSVj%2FC2ZPDmdfQb9DXGqMSwlPWBvVqOvn1VN3YzXYJPdsDSu%2B%2BhC8rE0%2FZgj5c6GOv%2BLL%2B%2FKMDq8FZhJHFhq0xnk2rG8%2BVOLJdfaL8TSAMyj%2BoFNjrafho4SX2eulrg5%2FrQFmYNFBiPd9%2FjnypWhhzl55m%2FRBsZXqc6RR2h47drnOfeeRY3ofwyYUFVzgf1kB2CPbgt%2BOlqnJLaNaRYiNGO3AXsM8gq8edhVLxzd%2BHx%2FKa3x3sws5aVk9bsQMCvm7LoUA5gdpi2jM1f36f8V0wrg8nSIwQfJLqAqsNafj%2BgoUrdH%2BwN1vQ2NjN6dO0H4CtZHOsTM%2FG2Dgf1XH%2FXlbtJkQEY0OTyyS8ITVI7FJ%2BlYswtliAIUSD6LzMhSa%2F%2BJrYQIwwe6WORBZgzfiYy9v9888LzJ5CrEConQxIojzEgzz8muJsOYI9WyWuoD6wj94omxDY3%2Fp0PsJarci0iC%2BQElLDNdrF48CziFXtWhCTEo32XCP9ANody2Cs8qSGoO%2FTqxm1ZdmTMFd2hTCN6sDJBjqkAdS%2FBz39pKdUnEVM%2FJ%2BdxNKAf7a4gZb6bSOAQh512ptb7qLm3%2FihMIUJOITsa4JYTSBA93AAAaidD5k1UiYOjmtoe5PpdhGLPIrkhQzXRhXEmbqlvfIaZW8UW7j3qKFPNNFpEQYaAlD6q7ibt463GznzOGQVyQflSf60%2FMgvLfTyEoG%2F3%2BuJ%2Bn3mUNCUwlUvE4ExX%2Bg%2FBpT0CsWrn4H9MvDy8Wsw&X-Amz-Signature=a1d669a7bc7aa21422499ec52afd48463bcabc97ee1a155a3d36d492a05d5b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEVCMWY6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCZ1LkS69B1O5nbn8mUsVGzSmahp6%2Bw0W46aVCwxBICDgIhAOKfK%2F7spaEDlwqx1voJndzn3tmhOjENGmCo11K%2FRRj5Kv8DCC4QABoMNjM3NDIzMTgzODA1IgwVOiaJh5Px9W5iDTkq3APvKOiFXYIg4w5a0YTiVIav67668pqd1Yo1%2Bm%2Bq3VWRKhSWdIrXPdCCoCR4DViFrSyOr8TH9hr%2FjphTW4Z7rtiy4RiONBblkSYDRuQXz8p0zKoSVj%2FC2ZPDmdfQb9DXGqMSwlPWBvVqOvn1VN3YzXYJPdsDSu%2B%2BhC8rE0%2FZgj5c6GOv%2BLL%2B%2FKMDq8FZhJHFhq0xnk2rG8%2BVOLJdfaL8TSAMyj%2BoFNjrafho4SX2eulrg5%2FrQFmYNFBiPd9%2FjnypWhhzl55m%2FRBsZXqc6RR2h47drnOfeeRY3ofwyYUFVzgf1kB2CPbgt%2BOlqnJLaNaRYiNGO3AXsM8gq8edhVLxzd%2BHx%2FKa3x3sws5aVk9bsQMCvm7LoUA5gdpi2jM1f36f8V0wrg8nSIwQfJLqAqsNafj%2BgoUrdH%2BwN1vQ2NjN6dO0H4CtZHOsTM%2FG2Dgf1XH%2FXlbtJkQEY0OTyyS8ITVI7FJ%2BlYswtliAIUSD6LzMhSa%2F%2BJrYQIwwe6WORBZgzfiYy9v9888LzJ5CrEConQxIojzEgzz8muJsOYI9WyWuoD6wj94omxDY3%2Fp0PsJarci0iC%2BQElLDNdrF48CziFXtWhCTEo32XCP9ANody2Cs8qSGoO%2FTqxm1ZdmTMFd2hTCN6sDJBjqkAdS%2FBz39pKdUnEVM%2FJ%2BdxNKAf7a4gZb6bSOAQh512ptb7qLm3%2FihMIUJOITsa4JYTSBA93AAAaidD5k1UiYOjmtoe5PpdhGLPIrkhQzXRhXEmbqlvfIaZW8UW7j3qKFPNNFpEQYaAlD6q7ibt463GznzOGQVyQflSf60%2FMgvLfTyEoG%2F3%2BuJ%2Bn3mUNCUwlUvE4ExX%2Bg%2FBpT0CsWrn4H9MvDy8Wsw&X-Amz-Signature=701c4301a7c01c88227f8bd662d03f4edfec5e3d1b1f7a6434a1bd0d2648c671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

