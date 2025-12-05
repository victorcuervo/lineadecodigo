---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MICFBQX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFhzi%2BaGNQG6dJHTxP4E%2B6S07KE%2Bm5f60%2Bg0BTUXylbAiBVGcHTqrBgb1ukrIADii3XpHQRRWEfHlgGpQ2SK5%2FYiyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM6I0BdgTCMuzI2QnmKtwDrz6hI6Ou7Wv9fs1vSV8HmzNe21CxaGY%2BEU%2Bhyx%2FwzlpcLPRnCEC%2B9sAvePeWtd3xpGh5JzoCd9RVjbfgv79k9t7UfvIAITS%2BdwZeB2ZCL5K3Zj19rZOIppFRqK7vU2XuUXbjp%2FzuQurf4uCi4XoCq4EbcTwV01ps0p4z2bFjoGchzwGBEwpRmpbYkxElfW5UB%2FKD%2F%2BdvghywdPOWCPbTiYvneTL9uKj0oazKhgs2f3vNjRuNAEV1mThdqF207xN%2F6SDJCdUScGua1259uXoIBiuS02fvI3Xs1UhBp6MTRBVwbzGvMZnFp7pQVMJiozN8r0iVctWY7v7AtonUFEZqGzsp91skpW%2FFafAkIjwa6Dx0P2uzJ1xEqB3nsmdkpxhL3kod6LwyJWqJn9fs7ejTN1u%2BZE6uIyAwmYVvTWWf1c%2BBX%2FkDBs8tzliJG9T6HHGzm1jNwOVObBqOoZNB%2Bqb%2FikUltkxe%2BNexo9jtR73IG6%2FFCzeSlDqeCMiCuH9x%2F%2BixzZ0ofIcbqhf8jKFww%2BciDh8zc2MzkCDpoLuMjlZTtEyQvZ5vrVuB9wYChpVkfTc8bRoLDOUiiiVuz3WpGqskaia%2FVnT55YbHptCzg1mgJJfedo1ZWuj6Jsen%2BQEwoIzIyQY6pgHfrJ0F4vsr3VE7cNMS1tOdftHlY1zkp6yAmwSkOtDSC35leL2qVvt4j9anxydCxcJZr5%2FBRswh2ySsJzQpsLkMwJzoyXtoiuTjWm1xhYU6lDfCJOt%2BVW1FZrb%2FTq8DJmr%2FO%2BC%2FuvDx1MKfaG%2Fml7l80JYDU0S1Ar9Jb3LUmmh5KmwURJIZi8aanNq3iC6E%2FDPv1KQoYXsl3H1nzl8%2FQ4cefzA1ttKh&X-Amz-Signature=b6f277228f204d048121596051d6024aedaf5aa93ff93e5345b0cfb395e7d4d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MICFBQX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFhzi%2BaGNQG6dJHTxP4E%2B6S07KE%2Bm5f60%2Bg0BTUXylbAiBVGcHTqrBgb1ukrIADii3XpHQRRWEfHlgGpQ2SK5%2FYiyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM6I0BdgTCMuzI2QnmKtwDrz6hI6Ou7Wv9fs1vSV8HmzNe21CxaGY%2BEU%2Bhyx%2FwzlpcLPRnCEC%2B9sAvePeWtd3xpGh5JzoCd9RVjbfgv79k9t7UfvIAITS%2BdwZeB2ZCL5K3Zj19rZOIppFRqK7vU2XuUXbjp%2FzuQurf4uCi4XoCq4EbcTwV01ps0p4z2bFjoGchzwGBEwpRmpbYkxElfW5UB%2FKD%2F%2BdvghywdPOWCPbTiYvneTL9uKj0oazKhgs2f3vNjRuNAEV1mThdqF207xN%2F6SDJCdUScGua1259uXoIBiuS02fvI3Xs1UhBp6MTRBVwbzGvMZnFp7pQVMJiozN8r0iVctWY7v7AtonUFEZqGzsp91skpW%2FFafAkIjwa6Dx0P2uzJ1xEqB3nsmdkpxhL3kod6LwyJWqJn9fs7ejTN1u%2BZE6uIyAwmYVvTWWf1c%2BBX%2FkDBs8tzliJG9T6HHGzm1jNwOVObBqOoZNB%2Bqb%2FikUltkxe%2BNexo9jtR73IG6%2FFCzeSlDqeCMiCuH9x%2F%2BixzZ0ofIcbqhf8jKFww%2BciDh8zc2MzkCDpoLuMjlZTtEyQvZ5vrVuB9wYChpVkfTc8bRoLDOUiiiVuz3WpGqskaia%2FVnT55YbHptCzg1mgJJfedo1ZWuj6Jsen%2BQEwoIzIyQY6pgHfrJ0F4vsr3VE7cNMS1tOdftHlY1zkp6yAmwSkOtDSC35leL2qVvt4j9anxydCxcJZr5%2FBRswh2ySsJzQpsLkMwJzoyXtoiuTjWm1xhYU6lDfCJOt%2BVW1FZrb%2FTq8DJmr%2FO%2BC%2FuvDx1MKfaG%2Fml7l80JYDU0S1Ar9Jb3LUmmh5KmwURJIZi8aanNq3iC6E%2FDPv1KQoYXsl3H1nzl8%2FQ4cefzA1ttKh&X-Amz-Signature=4bcf0848df0bad13ec34263da59c03e95f2faf3bbb02a01df557cb683ccc3d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

