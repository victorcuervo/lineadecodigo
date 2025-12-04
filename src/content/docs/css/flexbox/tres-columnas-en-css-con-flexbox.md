---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBVQN2ZR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkqPUD0SMwaNewVB5M6TMtaJOX%2BA9jtiNZrfgb9%2BabBgIhANoltO4p01aqU3Iga%2Fk6C8Hv61V3pzLEnd6JU9KRfCJMKv8DCEoQABoMNjM3NDIzMTgzODA1Igy7YtOAd%2BAVulQz0qoq3ANCkfYBTv2bbHl3R8Vv5LtOxdTiFdC4sFEIkTQq74usL1cBJ604HI5wz6V%2BxYSUyOKbHEnk2MzfKZNAnsnfiTyF3lPQZT2n5seRD8fsQGFpcCtSPBUCqW2199VSvHtq1tge%2BVeZg21bpwayRMs9tcbi4L%2FCD%2BDL7Fy7Gg5jMJznvE7d2aotdJpigGQAWZWezlVdrX6aNPClM1TKOkOo4GjU1RjlcTMYDbpBrL0SkHIIEHTWZlclKpGaSLeW6qYo3bvfmHXqxyToGj3QlFwgQiiIanzJlB1bMjGP2yvpWFtWjZH1dp6GAqIet52ii3s28xxxqfxswVUZMQZorNXcCenYQOjU9HruiqPXpCwXQtuBQZ6TkavK6IO2md%2FExRJXQFcVppdc9uDImmdJH9pEF9JQQtsP%2FBm7lnOoVhr8y%2FUDaVa9AYrCQyF%2FbpquBw7I7LPIzHrpKtnWesBt6vtql6iVvL%2BHoVX6gSra%2FJU0FOZtqz0XIxlw5od4SJ3ZXTvTCxqG%2BtQ%2FheM9E4il3BPx%2FrkrfLLzYTbTcoFiJGs%2F3XATL8tX6ea5WoY3aESg0wDr0ymMahL9NKTvCfsoFn0doM4hKI0Rc2perJEBQ1q2m5KLb3Hv2ayX957tGM1GUTDZ%2BsbJBjqkATImdACuMpBQBLpWgkimmkj7%2BgMG1RHS5r8DFa85xb8D8Yxt0ECTMIKlUemcDQmSonz%2FkhqPBY%2Ban1HCfCJxnEQzTIJuB6dj%2FCbZU547ARTwdZBcnQkfsbRJu5NPodZF%2Fm0pPCVBLKMhYmeJKvNuu3R9f%2FMIbZv3aDDjg2BOm9e%2BUPcPvxpcGercXT1hECLpaG7i0XsN1ufryKUPXT4zlbegJoBX&X-Amz-Signature=18a95fbad9a676dd960d6b8f3e26753dbeb7d1f23715d435cb85e08159fd87bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBVQN2ZR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkqPUD0SMwaNewVB5M6TMtaJOX%2BA9jtiNZrfgb9%2BabBgIhANoltO4p01aqU3Iga%2Fk6C8Hv61V3pzLEnd6JU9KRfCJMKv8DCEoQABoMNjM3NDIzMTgzODA1Igy7YtOAd%2BAVulQz0qoq3ANCkfYBTv2bbHl3R8Vv5LtOxdTiFdC4sFEIkTQq74usL1cBJ604HI5wz6V%2BxYSUyOKbHEnk2MzfKZNAnsnfiTyF3lPQZT2n5seRD8fsQGFpcCtSPBUCqW2199VSvHtq1tge%2BVeZg21bpwayRMs9tcbi4L%2FCD%2BDL7Fy7Gg5jMJznvE7d2aotdJpigGQAWZWezlVdrX6aNPClM1TKOkOo4GjU1RjlcTMYDbpBrL0SkHIIEHTWZlclKpGaSLeW6qYo3bvfmHXqxyToGj3QlFwgQiiIanzJlB1bMjGP2yvpWFtWjZH1dp6GAqIet52ii3s28xxxqfxswVUZMQZorNXcCenYQOjU9HruiqPXpCwXQtuBQZ6TkavK6IO2md%2FExRJXQFcVppdc9uDImmdJH9pEF9JQQtsP%2FBm7lnOoVhr8y%2FUDaVa9AYrCQyF%2FbpquBw7I7LPIzHrpKtnWesBt6vtql6iVvL%2BHoVX6gSra%2FJU0FOZtqz0XIxlw5od4SJ3ZXTvTCxqG%2BtQ%2FheM9E4il3BPx%2FrkrfLLzYTbTcoFiJGs%2F3XATL8tX6ea5WoY3aESg0wDr0ymMahL9NKTvCfsoFn0doM4hKI0Rc2perJEBQ1q2m5KLb3Hv2ayX957tGM1GUTDZ%2BsbJBjqkATImdACuMpBQBLpWgkimmkj7%2BgMG1RHS5r8DFa85xb8D8Yxt0ECTMIKlUemcDQmSonz%2FkhqPBY%2Ban1HCfCJxnEQzTIJuB6dj%2FCbZU547ARTwdZBcnQkfsbRJu5NPodZF%2Fm0pPCVBLKMhYmeJKvNuu3R9f%2FMIbZv3aDDjg2BOm9e%2BUPcPvxpcGercXT1hECLpaG7i0XsN1ufryKUPXT4zlbegJoBX&X-Amz-Signature=c3b7684c249c69d344a55d2c99827f1a8348013f40bb96dd27f0842ab62b18ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

