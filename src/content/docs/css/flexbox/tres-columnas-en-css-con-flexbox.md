---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVSZZUP7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD45QQw9IsyRxWPAqc6g0ZbeV7yMkMnjwkrdVPmvofuGQIgKuaw3L4zSnl3C31jw0%2BgZyqXUDcvLmAgQlR9W9S3QeMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrGvAwCcFgrai%2FjACrcA%2BpEbykNMTb6BHYQlaOd1Ppj8bHKMjmCE8nv%2BxOxNhuuWhDkaBrAYydmq%2FjX3RXUOeNXuRhq3FRivqWXkO7YZd%2FCbelGFf9BKK5knsUBvJM30CMZseVQWkuv6qBC7Ni7Wpjx33tmPgv2N1vSKiE2zejV4FUcH8ibpemrgc5K0wZT0MjpAbRrjEqS9EYsKELMq3eO4Xy0UCP%2Fw64jXbcDOdYLWq6NJDZnBy%2Fgby%2FCBh2t8o6ZOPKgAz5TYT73SwxqxttLSlVPUQ8PAyv9go2BM2y56i5qvNDdzzGrFxn%2B72KwGZs2nS%2BZwwgpuSo%2FVtuB2GJbOl%2Fun9V4Vts0N6srW45LYQbiZ79idi4iiU1EcNoNLyRfe27GgJadZvby3ZisdBi6G8VGi8I7clbhhdV45XPVMLa%2Bwy13%2B8IS214WYAX5VIengEY81jbRnzGceElMV4OHFu0d%2FCzqO%2Bv4z7C9v8kFsTfmdmiT8n10RJf2IYmyXkrto2viV4cun3Zp1d4Auxah4DjvwXyClQHoDVrUd4qzfH67avfs%2FXOROCDUD1RtuEzm%2FnvI6q1lhKZnaVVrF%2BEMrOuxiB%2F9bGtg%2BT%2FUpF6RubClzOhGyhJ2RxELLPJL7WWCdVA1062HgdlLMPKd1MkGOqUBtLx48%2BOOAZH8zL%2B3xIy2p%2FXhldbMfzrGZj2xSlhzb158sxJqqpFbPedV1MCxHcSeqebJEtcEqbwCNbYRVQKFROwcALasnpropTWws%2BO5LivZdBgiQEt6vZCI0BRIQkrfdOJA%2F8ax%2BzLg9TUE0Pl0Sa6il2IhIqG67aghx%2BDz4%2B0XUC5viX2vGPO81IsJaPSbu6hmJwy3NJF5SweubDwrFD%2Baycj8&X-Amz-Signature=0fcd04b13c46b994f93847ca7b24b3932025a981da316256980f4744ce453b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVSZZUP7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD45QQw9IsyRxWPAqc6g0ZbeV7yMkMnjwkrdVPmvofuGQIgKuaw3L4zSnl3C31jw0%2BgZyqXUDcvLmAgQlR9W9S3QeMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrGvAwCcFgrai%2FjACrcA%2BpEbykNMTb6BHYQlaOd1Ppj8bHKMjmCE8nv%2BxOxNhuuWhDkaBrAYydmq%2FjX3RXUOeNXuRhq3FRivqWXkO7YZd%2FCbelGFf9BKK5knsUBvJM30CMZseVQWkuv6qBC7Ni7Wpjx33tmPgv2N1vSKiE2zejV4FUcH8ibpemrgc5K0wZT0MjpAbRrjEqS9EYsKELMq3eO4Xy0UCP%2Fw64jXbcDOdYLWq6NJDZnBy%2Fgby%2FCBh2t8o6ZOPKgAz5TYT73SwxqxttLSlVPUQ8PAyv9go2BM2y56i5qvNDdzzGrFxn%2B72KwGZs2nS%2BZwwgpuSo%2FVtuB2GJbOl%2Fun9V4Vts0N6srW45LYQbiZ79idi4iiU1EcNoNLyRfe27GgJadZvby3ZisdBi6G8VGi8I7clbhhdV45XPVMLa%2Bwy13%2B8IS214WYAX5VIengEY81jbRnzGceElMV4OHFu0d%2FCzqO%2Bv4z7C9v8kFsTfmdmiT8n10RJf2IYmyXkrto2viV4cun3Zp1d4Auxah4DjvwXyClQHoDVrUd4qzfH67avfs%2FXOROCDUD1RtuEzm%2FnvI6q1lhKZnaVVrF%2BEMrOuxiB%2F9bGtg%2BT%2FUpF6RubClzOhGyhJ2RxELLPJL7WWCdVA1062HgdlLMPKd1MkGOqUBtLx48%2BOOAZH8zL%2B3xIy2p%2FXhldbMfzrGZj2xSlhzb158sxJqqpFbPedV1MCxHcSeqebJEtcEqbwCNbYRVQKFROwcALasnpropTWws%2BO5LivZdBgiQEt6vZCI0BRIQkrfdOJA%2F8ax%2BzLg9TUE0Pl0Sa6il2IhIqG67aghx%2BDz4%2B0XUC5viX2vGPO81IsJaPSbu6hmJwy3NJF5SweubDwrFD%2Baycj8&X-Amz-Signature=b8e7e4a44a1887bfb47faf7f941a61791f8cd56e33e5449260d1878add0f3109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

