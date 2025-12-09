---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RN3EXY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1H0EVd6YWJii1d8BJy0ObnBht4THJHUb%2B36EohHkXRAIgL37qy8mfYRIaNLmQCKVQZEt8DDlJDHqtfp%2FEn7YF66cqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyV0L1jw%2BQCRbG3NyrcAy3Txf41Ffn%2BYX28TgeiPtF8AnIp77lYvxEPEoib8wltX9Q5ynu39iU6V2xlJPoFOTt5d9NFpdezapyFr8c4X6DN6obg3%2Bvk9G28T5%2BIVkDBgIMd0wxJxXa4B5Cywd87qkory7vmrTLu6sTIiGNbfLcIWTIv3Wne5B0uphMKVYz%2BoV%2BX6L9ZKOpinmmvPmP4E1F7n02OO%2Bccmmfh6LGmh5wQfxJCLRdxC9PenvO3IQAvGxxHgJQGU7gXpjOJwa%2BiGcpGdrWZFV8E9xi1bN3yM2W9cHpUG0y5ecR9hjIEIr6waxs2PIUmbqky4HcPxIX00vYqKhoDU9cz4XB9b0o7Rx3jeVmhiJm%2FYSNnqGfBzNvFKlFP93IvyolMWMB523eijsYHhdT9A8bHDt%2BDI6k9rXQDbQibWv1%2BAZ1p8FdRAcku3Uy6ocg0bSvAc9gxPG3YM6kH0pyP%2B%2BVgKq%2Bn0P65yrf5WwZyUZMFRecmUp10YdH3SIEDDi1jlWDPcx5Xty1J8tALC8LPIezfINms9tATt%2FrLc%2BT%2F3PR4WC092gE91s4fqFxGVAJm3WHusbEKWnYVqsYz5QEvPAg864lPtUHPXmBAuI7gwIYicjFK1%2BNSNfsEJLy1k4P4Nv2FeVM5MJuI38kGOqUB94wxA9j1o0mV6ZqXy%2BawVhh19AXPVKRWSFZRYNwZNAWCPdw4XeTQtb1MQwdO5cKcxGMvq%2F9cmK8il6%2BwwNIGm3FeIOpVoFSM0%2F4e3Fm4Nt5LirjM%2BoioeiwqKtMBfd9tlEYmKf7tYS6r3MXHEpgusXEb2mYGY0BjwRATeoexp%2FtMAy%2FNJVSSn2BwYKq4NVqMItJIq6Hcgkx5mNyFzcdQE0UWsdVk&X-Amz-Signature=0b1bedcd69480f3d06bfcc5a605d106236dd2a2ff8ee8e9a267321c05b269f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RN3EXY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1H0EVd6YWJii1d8BJy0ObnBht4THJHUb%2B36EohHkXRAIgL37qy8mfYRIaNLmQCKVQZEt8DDlJDHqtfp%2FEn7YF66cqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyV0L1jw%2BQCRbG3NyrcAy3Txf41Ffn%2BYX28TgeiPtF8AnIp77lYvxEPEoib8wltX9Q5ynu39iU6V2xlJPoFOTt5d9NFpdezapyFr8c4X6DN6obg3%2Bvk9G28T5%2BIVkDBgIMd0wxJxXa4B5Cywd87qkory7vmrTLu6sTIiGNbfLcIWTIv3Wne5B0uphMKVYz%2BoV%2BX6L9ZKOpinmmvPmP4E1F7n02OO%2Bccmmfh6LGmh5wQfxJCLRdxC9PenvO3IQAvGxxHgJQGU7gXpjOJwa%2BiGcpGdrWZFV8E9xi1bN3yM2W9cHpUG0y5ecR9hjIEIr6waxs2PIUmbqky4HcPxIX00vYqKhoDU9cz4XB9b0o7Rx3jeVmhiJm%2FYSNnqGfBzNvFKlFP93IvyolMWMB523eijsYHhdT9A8bHDt%2BDI6k9rXQDbQibWv1%2BAZ1p8FdRAcku3Uy6ocg0bSvAc9gxPG3YM6kH0pyP%2B%2BVgKq%2Bn0P65yrf5WwZyUZMFRecmUp10YdH3SIEDDi1jlWDPcx5Xty1J8tALC8LPIezfINms9tATt%2FrLc%2BT%2F3PR4WC092gE91s4fqFxGVAJm3WHusbEKWnYVqsYz5QEvPAg864lPtUHPXmBAuI7gwIYicjFK1%2BNSNfsEJLy1k4P4Nv2FeVM5MJuI38kGOqUB94wxA9j1o0mV6ZqXy%2BawVhh19AXPVKRWSFZRYNwZNAWCPdw4XeTQtb1MQwdO5cKcxGMvq%2F9cmK8il6%2BwwNIGm3FeIOpVoFSM0%2F4e3Fm4Nt5LirjM%2BoioeiwqKtMBfd9tlEYmKf7tYS6r3MXHEpgusXEb2mYGY0BjwRATeoexp%2FtMAy%2FNJVSSn2BwYKq4NVqMItJIq6Hcgkx5mNyFzcdQE0UWsdVk&X-Amz-Signature=b069e8c74d691ab68ce52c386b6e474b908470a39b57a58c60731972e9ece351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

