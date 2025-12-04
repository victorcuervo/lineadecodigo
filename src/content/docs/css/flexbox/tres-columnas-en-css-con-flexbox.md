---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZSDV5E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDQHrfn3Oud9o4Mei3XesSRlXJIfQy%2BQIJzPDcgt49KBwIgExcrcSQmwjLixnj01B6PREytMHkMP4rlmcqfPb%2BGTWAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDL%2BCTxOE42QrSRbqVSrcA2AN0DXjCMJhIyw4J2WuCzMoWjT%2F2uv1n1jep%2FGbDE1ZKvzzIM0SUPsANbfwn2la8AgUeNbaPgFBPTDd%2FDjraEiNlXeBF%2BfAZ4dfZ%2BgJDMmTM7gfSr8iDadhOiHu0jAyfMzEz0Wi94n%2F7RO6OqUTxghzB8%2BhFVbPcTRdSfHu3iPBNv5qSR1DIFVGkAUDWRJDYYmXBHtlZAGbqEEhAQt5XVW05hed%2B4IbVTkEHc8rY26k57a%2FR8QNmeTTjK7%2BiyoFVpKULbEFHiH1qBnH403sBFCanSGZ7WkuDSDeTRB4mkSG1qNjvwTnDL%2FYYkaea9LdOfaxs4f%2BUpqO8%2BIO54vFF2s21ZZa7mcnFotYlxsg094qgYISkBaWcV%2FJI6mAszr0JRP5hmsN2PCgGg39WfigqSYX7JXchgcuRJ%2Bqv%2Blub7BuSFEVxaRekFDn9tqAlAvxro0WPOIQ%2BGUevll8Xh3fYoitXVKejxYSJpIrG2I3RD2ITK2nMBAZX%2BZNGVK4olmZI8hngh2Rk36RUtHSRk15ZgUVzIgikXde%2FQ2pI4RmCeVD%2FB4L7pLZgQMPTCbHPBIJCaf8Shgs6LmA4jZCxLPw9Zqg2%2FONpAEx2c0Cl1b4JwnaXN%2BMT%2F0P8L4yx5vuMJPnxckGOqUBjGQU6z0hJyh1qXqqjdLXkRbkQxLomSNq35ht0I47NicdtFCY1sHnPoCeuRnx7X1CCF2jl5iqq4uTtz7%2B2dSbaN3aBPSHELR48W3raeHCRvrgSLM6Qh5lTeP6HTAPIxWvR4o0KYi%2FtbcoscAX98mCp4TBfdQAKPt%2Bcgd%2F9TZuMXb7vuFo0Jx2xcssTZkyWt421TAwCYC8XeaiG2WEw8JKUnRE%2F%2BFC&X-Amz-Signature=72e2d3389fd7c5e242ec85415e3ec91c23b01ad79a6d961843831582f52f5975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZSDV5E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDQHrfn3Oud9o4Mei3XesSRlXJIfQy%2BQIJzPDcgt49KBwIgExcrcSQmwjLixnj01B6PREytMHkMP4rlmcqfPb%2BGTWAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDL%2BCTxOE42QrSRbqVSrcA2AN0DXjCMJhIyw4J2WuCzMoWjT%2F2uv1n1jep%2FGbDE1ZKvzzIM0SUPsANbfwn2la8AgUeNbaPgFBPTDd%2FDjraEiNlXeBF%2BfAZ4dfZ%2BgJDMmTM7gfSr8iDadhOiHu0jAyfMzEz0Wi94n%2F7RO6OqUTxghzB8%2BhFVbPcTRdSfHu3iPBNv5qSR1DIFVGkAUDWRJDYYmXBHtlZAGbqEEhAQt5XVW05hed%2B4IbVTkEHc8rY26k57a%2FR8QNmeTTjK7%2BiyoFVpKULbEFHiH1qBnH403sBFCanSGZ7WkuDSDeTRB4mkSG1qNjvwTnDL%2FYYkaea9LdOfaxs4f%2BUpqO8%2BIO54vFF2s21ZZa7mcnFotYlxsg094qgYISkBaWcV%2FJI6mAszr0JRP5hmsN2PCgGg39WfigqSYX7JXchgcuRJ%2Bqv%2Blub7BuSFEVxaRekFDn9tqAlAvxro0WPOIQ%2BGUevll8Xh3fYoitXVKejxYSJpIrG2I3RD2ITK2nMBAZX%2BZNGVK4olmZI8hngh2Rk36RUtHSRk15ZgUVzIgikXde%2FQ2pI4RmCeVD%2FB4L7pLZgQMPTCbHPBIJCaf8Shgs6LmA4jZCxLPw9Zqg2%2FONpAEx2c0Cl1b4JwnaXN%2BMT%2F0P8L4yx5vuMJPnxckGOqUBjGQU6z0hJyh1qXqqjdLXkRbkQxLomSNq35ht0I47NicdtFCY1sHnPoCeuRnx7X1CCF2jl5iqq4uTtz7%2B2dSbaN3aBPSHELR48W3raeHCRvrgSLM6Qh5lTeP6HTAPIxWvR4o0KYi%2FtbcoscAX98mCp4TBfdQAKPt%2Bcgd%2F9TZuMXb7vuFo0Jx2xcssTZkyWt421TAwCYC8XeaiG2WEw8JKUnRE%2F%2BFC&X-Amz-Signature=85921d46e98fbb282f1863d044963e960a53257847886700b4ac14ff2cf76458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

