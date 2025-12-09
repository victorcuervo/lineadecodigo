---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOIP5KQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4JXS6F6vTC9IUbTGmxSNN2we8kbUZ1mkqT11Flq%2FZYAiEAqwmSJQ5hyVmb7tOPmI2ImkNK%2FW1Iy4rkfsBUG41mJyAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfNBikea%2BZnihq4YSrcA%2F7PxMySRn7GvU7E%2Ffh8QDWISEbOU2XU5cbNgtz6%2F0sPCeT%2FnNA4sYAR78Db6IAvs484DY4Jubthvjh7jLC9UCEJGnMe4V6Qzf8XrKFoKmSnxYL3DnweTkKbgBRnVkR1rncpxsDy5i0Hl23bGrz802MmfScpUhkSV8GDlaxXtzSxIGlL00j2mIvYKO%2FlAK6dzlRsXcZogK%2FNhbL0Z%2B34lj%2FFfch1CM4CaARL7oKkvfo0M1Ibr3o%2BRAFoIebLJ8LM2vefbDoxL8tBjRLvGcUmJrWbEjSCeIgMjBy80TmVsMW4NUl1LLLntgVxy%2Bn8SVW%2FGiJ%2Fi7ozBIAgmphq9%2Fft4l2MdNvsCdWPhesWEmEbzy2bT%2BzZHzFy8cIpYcmK3VnlFxk2CojMUyI%2BZN%2FbN5%2BbOkPl%2FGuIu3%2F9fTvyHwILHDIbgm7mlU3oZXur0XlVxoHaA94y6PTt3in8wVtuz%2BLC1CjkVJQiPZszo55oWUmyR1%2FCMf2uGS347SR9oGgtEtjC%2BG%2FyUCj%2BrrH8Bu2aL1QEexaoxr3NLmcR6I1FX5OhoFkl0UVSRDoNN%2B4iHceqkGIlJ7f1glMITWiPk7rWVyv5d7xajLHueyPFaPzcA37Q3mmY2WLSNVyx3SZfFf6aMJeu3skGOqUBgoqn87fvgPeEIc%2F2uwE2Lv73FY6sSXBzUOwhqSuPHGEt2YRBXui7PBhraADyjlSsfbPcAiJ731eJg2WlyXTfN6St18HITd6KKKTr1sP3btJT4dzI4D17ccIR3Y7WmxTmCGEV11JSk43wfwfrRyZQl4nlQOA43Cf82VZjDJya7vIVRLMPd%2BSurutpvyTlftDQHp0HaXKUT0WdezjdnTeoviuxBfj6&X-Amz-Signature=497370e940173b0c56ce31643b56c297bdbac4e4700a5e9a37d658b372556427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOIP5KQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4JXS6F6vTC9IUbTGmxSNN2we8kbUZ1mkqT11Flq%2FZYAiEAqwmSJQ5hyVmb7tOPmI2ImkNK%2FW1Iy4rkfsBUG41mJyAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfNBikea%2BZnihq4YSrcA%2F7PxMySRn7GvU7E%2Ffh8QDWISEbOU2XU5cbNgtz6%2F0sPCeT%2FnNA4sYAR78Db6IAvs484DY4Jubthvjh7jLC9UCEJGnMe4V6Qzf8XrKFoKmSnxYL3DnweTkKbgBRnVkR1rncpxsDy5i0Hl23bGrz802MmfScpUhkSV8GDlaxXtzSxIGlL00j2mIvYKO%2FlAK6dzlRsXcZogK%2FNhbL0Z%2B34lj%2FFfch1CM4CaARL7oKkvfo0M1Ibr3o%2BRAFoIebLJ8LM2vefbDoxL8tBjRLvGcUmJrWbEjSCeIgMjBy80TmVsMW4NUl1LLLntgVxy%2Bn8SVW%2FGiJ%2Fi7ozBIAgmphq9%2Fft4l2MdNvsCdWPhesWEmEbzy2bT%2BzZHzFy8cIpYcmK3VnlFxk2CojMUyI%2BZN%2FbN5%2BbOkPl%2FGuIu3%2F9fTvyHwILHDIbgm7mlU3oZXur0XlVxoHaA94y6PTt3in8wVtuz%2BLC1CjkVJQiPZszo55oWUmyR1%2FCMf2uGS347SR9oGgtEtjC%2BG%2FyUCj%2BrrH8Bu2aL1QEexaoxr3NLmcR6I1FX5OhoFkl0UVSRDoNN%2B4iHceqkGIlJ7f1glMITWiPk7rWVyv5d7xajLHueyPFaPzcA37Q3mmY2WLSNVyx3SZfFf6aMJeu3skGOqUBgoqn87fvgPeEIc%2F2uwE2Lv73FY6sSXBzUOwhqSuPHGEt2YRBXui7PBhraADyjlSsfbPcAiJ731eJg2WlyXTfN6St18HITd6KKKTr1sP3btJT4dzI4D17ccIR3Y7WmxTmCGEV11JSk43wfwfrRyZQl4nlQOA43Cf82VZjDJya7vIVRLMPd%2BSurutpvyTlftDQHp0HaXKUT0WdezjdnTeoviuxBfj6&X-Amz-Signature=7c6cf98f66d8509f0d1708469a13da6775d2611ecc70b20efb9be7f5f141bb69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

