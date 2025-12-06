---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LEWAYRA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw12VlnnCbToBQTjrMkptmLNd%2FvQssWVGkyEeuytTySgIgF418seiixng5lO3jYI%2BJrMwEn9FamaBALaV2B%2F8WbwYq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKLILKSSxd1Eg05lFSrcA%2B7fFeoV2g1iyGGVcXdTQcmifU4MbKiJ4E9C79ftOOcveVHEbjjx6vrhcQEoPyKKRnVMDm7BZqCWRoYy3raoVTmUcPFN7hby6%2F68q7lUPoGV%2FlOLyvFRofu3RYyKNy6j2t9PbM%2Blxm0bwR4mB6t1BxKwLRrHCQ1AVrVNiAqg%2Fi6H%2B0CMyPuy5PU4Z9EpBqKPBpYGvS4AYdISESXgBedKf%2B3IIQ7ZvH9oodxipeYTSc7FMbTsPZP45r%2FfHIgndM%2FW%2BIlO303PWCfJRxV%2FR1IBN2KDzQgh1qqBbb3ywLDjN2DFsUM9ub3wYJzA89QYllb%2BymljYa1Gy8tzd493y%2BWwlLPDROA7OEEHDe4owI91JJfqu4CANwvSiKUd1mRmRC%2B5nxHCFJwxpYK3St8%2Bjr8aLglk50AwaA9pTqv8Ihom4V3ICrb%2B50GyULSw0JQFpTEAG%2FivBjboh1%2BHLjPtx8wmjCFTZ%2FPd6IAW0EGaY%2Bs6Timre5eZYPKAhu6lDn0PcTh4eyQO6cjqgQzc%2BcLFzFnRw8LTO%2BQfh%2B1fIPhyfK3jYdTHkV1tRnahCNw8dIot5dZefwgmGAkIZhRZrlYteIumOhdFjlAO144oaKVcsvyrIpW2gGEFFTsVZZ01WduGMLf9zskGOqUB1ehMQTjPq%2FArFC0m1N8MFbDUwaPaCNqMj6nkPQvE1vCqcjx7%2BjwPT1zHfcpRQ4iP83VQJT91nuRG7YMn9MTAYGBYMuIz4wonNi9Tn8VvPKPkJr%2FNWbboo5AMzfFR022D7ubgZgWmrpzww4106hZrQfdAphXaEQiHM9XN%2FHleegUoenSunDT91%2FjioYiIjNRa3UtAkPD3nuSY9xlylBZygOsS64Gm&X-Amz-Signature=7527eeb9a696acaae5e74a758bf5265677479eeb1fd9db34f7c64a60fbbed48f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LEWAYRA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw12VlnnCbToBQTjrMkptmLNd%2FvQssWVGkyEeuytTySgIgF418seiixng5lO3jYI%2BJrMwEn9FamaBALaV2B%2F8WbwYq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKLILKSSxd1Eg05lFSrcA%2B7fFeoV2g1iyGGVcXdTQcmifU4MbKiJ4E9C79ftOOcveVHEbjjx6vrhcQEoPyKKRnVMDm7BZqCWRoYy3raoVTmUcPFN7hby6%2F68q7lUPoGV%2FlOLyvFRofu3RYyKNy6j2t9PbM%2Blxm0bwR4mB6t1BxKwLRrHCQ1AVrVNiAqg%2Fi6H%2B0CMyPuy5PU4Z9EpBqKPBpYGvS4AYdISESXgBedKf%2B3IIQ7ZvH9oodxipeYTSc7FMbTsPZP45r%2FfHIgndM%2FW%2BIlO303PWCfJRxV%2FR1IBN2KDzQgh1qqBbb3ywLDjN2DFsUM9ub3wYJzA89QYllb%2BymljYa1Gy8tzd493y%2BWwlLPDROA7OEEHDe4owI91JJfqu4CANwvSiKUd1mRmRC%2B5nxHCFJwxpYK3St8%2Bjr8aLglk50AwaA9pTqv8Ihom4V3ICrb%2B50GyULSw0JQFpTEAG%2FivBjboh1%2BHLjPtx8wmjCFTZ%2FPd6IAW0EGaY%2Bs6Timre5eZYPKAhu6lDn0PcTh4eyQO6cjqgQzc%2BcLFzFnRw8LTO%2BQfh%2B1fIPhyfK3jYdTHkV1tRnahCNw8dIot5dZefwgmGAkIZhRZrlYteIumOhdFjlAO144oaKVcsvyrIpW2gGEFFTsVZZ01WduGMLf9zskGOqUB1ehMQTjPq%2FArFC0m1N8MFbDUwaPaCNqMj6nkPQvE1vCqcjx7%2BjwPT1zHfcpRQ4iP83VQJT91nuRG7YMn9MTAYGBYMuIz4wonNi9Tn8VvPKPkJr%2FNWbboo5AMzfFR022D7ubgZgWmrpzww4106hZrQfdAphXaEQiHM9XN%2FHleegUoenSunDT91%2FjioYiIjNRa3UtAkPD3nuSY9xlylBZygOsS64Gm&X-Amz-Signature=d085d355505fc8ef75f4989197e4c73e9f4a005448cb71ac5f6457ffa8e626e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

