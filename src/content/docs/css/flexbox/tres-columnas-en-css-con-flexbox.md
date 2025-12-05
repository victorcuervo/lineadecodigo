---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDOWWNKP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS%2F%2BaLI02m0NoZk59Kdcsk0g%2FRkaoaFC5lhDoBPh8SFAIhAKNLcSrX0zpGHsjMpoP3IIVe03G8aZIY3%2Bm9E4egPU3cKv8DCGAQABoMNjM3NDIzMTgzODA1Igymmc2pa7nDNG5w6Wcq3AOG%2FEq4Swp0pAPHggRWYAgyCGZhS1ueemUDfnOamx2euwSj5RifAXjhOJ6gW4XZA0Rb%2Fv4S1K6Npc7oLExpvi2o4G80YI%2FQcMm%2FGq7XmSz05lVXev3VZEDj3lhk0OeReb3J3W8v2BC2D%2BlrSNZSNceaz2GQkZdQUGKqvlNofCMW2vSjSk6IPKejPY3KOgNmamGh3JWhZmPQJ2NXkdmm0XZR4AHVoBzwGPXMB47IL0kxIOnmf9v9Wvr5FuX0EkjwBcVlyqZWVi%2B%2FxMHeK%2Fi3O8gmJQd59VTq31i4esD5PQy%2BEHJZF68zEj8IKYbm9peg%2FQyaRrb8gQCpmegi9%2BcWeEsN%2FzD4YqnZt7m4lHHoBTHNW8OaCzd5afGDlTiK89Q1sXzob%2Bx%2F41nqMGstrR%2B%2FuuQL0OvSN8upaVRXKSyR2Zuk7lkgS7yZjaZW%2FDWMMm8Qq%2FV2Ld8JoEofwh5Rfsz1ssAerk8uMSkTET4H%2F4d1A6dET1ba1qwASDNI980bBQsD1pNwCLm6Zbr7dlA8a08Z9OuK7wMjN2A8ARtjSPSM74dnZNVRYfNhU77i0BKLLTtjh0cqg6wVa7Yjf%2FNsfJsIQ2rIi6FmIst1wy1vSQEO1aewvd2807wROfbnS2SWszDC5svJBjqkAcFT8eqwmFgfonrCKHff3mQ1aiu2e6xPU8XcJTFjzvUffi7bCtn1RkWAb%2Bdxdfpqqoe0sstNrMMQaA%2Bvg%2BteZL4RzNC98clGI716nYbuEl7H%2FX5zu1tntgc6Tkjezk9lUfEhrjGscCqc5GKNZaTRXEBDAQ0Ved6tJGPAH7V%2F5d9bHyD17j%2BpW%2BTuTW%2BvzuIvGfMuZ5ejp%2B6HAvR9vBJqG5ww%2FtPz&X-Amz-Signature=e36542f71cce98104e5d3e76d67c32ae8ce0c3cb3cb664aa1a6175b2e5ea5795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDOWWNKP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS%2F%2BaLI02m0NoZk59Kdcsk0g%2FRkaoaFC5lhDoBPh8SFAIhAKNLcSrX0zpGHsjMpoP3IIVe03G8aZIY3%2Bm9E4egPU3cKv8DCGAQABoMNjM3NDIzMTgzODA1Igymmc2pa7nDNG5w6Wcq3AOG%2FEq4Swp0pAPHggRWYAgyCGZhS1ueemUDfnOamx2euwSj5RifAXjhOJ6gW4XZA0Rb%2Fv4S1K6Npc7oLExpvi2o4G80YI%2FQcMm%2FGq7XmSz05lVXev3VZEDj3lhk0OeReb3J3W8v2BC2D%2BlrSNZSNceaz2GQkZdQUGKqvlNofCMW2vSjSk6IPKejPY3KOgNmamGh3JWhZmPQJ2NXkdmm0XZR4AHVoBzwGPXMB47IL0kxIOnmf9v9Wvr5FuX0EkjwBcVlyqZWVi%2B%2FxMHeK%2Fi3O8gmJQd59VTq31i4esD5PQy%2BEHJZF68zEj8IKYbm9peg%2FQyaRrb8gQCpmegi9%2BcWeEsN%2FzD4YqnZt7m4lHHoBTHNW8OaCzd5afGDlTiK89Q1sXzob%2Bx%2F41nqMGstrR%2B%2FuuQL0OvSN8upaVRXKSyR2Zuk7lkgS7yZjaZW%2FDWMMm8Qq%2FV2Ld8JoEofwh5Rfsz1ssAerk8uMSkTET4H%2F4d1A6dET1ba1qwASDNI980bBQsD1pNwCLm6Zbr7dlA8a08Z9OuK7wMjN2A8ARtjSPSM74dnZNVRYfNhU77i0BKLLTtjh0cqg6wVa7Yjf%2FNsfJsIQ2rIi6FmIst1wy1vSQEO1aewvd2807wROfbnS2SWszDC5svJBjqkAcFT8eqwmFgfonrCKHff3mQ1aiu2e6xPU8XcJTFjzvUffi7bCtn1RkWAb%2Bdxdfpqqoe0sstNrMMQaA%2Bvg%2BteZL4RzNC98clGI716nYbuEl7H%2FX5zu1tntgc6Tkjezk9lUfEhrjGscCqc5GKNZaTRXEBDAQ0Ved6tJGPAH7V%2F5d9bHyD17j%2BpW%2BTuTW%2BvzuIvGfMuZ5ejp%2B6HAvR9vBJqG5ww%2FtPz&X-Amz-Signature=d84d3956d5cfb9d57a84c8cac94c5c7601160ae7c25be9761f0c3c556b69ecbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

