---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS53SPLK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb8pE2kiXpo%2FhAaYbPXnYkIyz2tRHwidVMbnXH41J5dgIgRdYUNWvNiY6AQLVBNgGPUIcVJ5ceeCM8RFo6o2SgT70qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOR5egG0KDIuMeqZNyrcA%2BpDXXes0PVPV2uNUZh%2BazZjVE39mMiFl%2FmtsLRKQvEWCcQ78Y8Hifayt4wYq8HZF8hB6wq7E8gojj%2FpH%2FyHpAcx0VE%2BcIUGP6s7VAWDuhw4yHclHd%2Bt2vXirn%2BXBdJTeHWD6GKXz5WPZk7%2B8BO4XCTA7NWVbkBpWGOXfWaJq6F2Bhn9IRYqC51OHWXgawLG5teVclnbg2uzfOWCXEDmV8PbhwvDCXNwwNV7xvopL83Uqfl%2FNghK7YGv7McT3GydMos%2F5R%2BzSKnyPlfyDaIGGxTLRM7SfQ8xzW7e8Joj8W2JF7D%2Fmza3u9WrFvW3HRjieDlRqKVdnKGzzPgw7O0vAFQbJM2zpakm7k42aNa0PZYTUXHDPjVhZGYjMKmKWc9ykJ0ztdfMUpEQXfo8cOvQD9cOe1wIpfGmdvxmo3%2FMrcPw%2BzZbuIDG4i0QTDhKrVHl%2FCcl9ZFuaux0b5Sq4aO2PnKDWlyc9IpR7nKd%2FUHFp6o3GE83R1fvQrNz0TUkF%2BX1KpGYsxFDRTbbplcljJI5vW%2B4K7hIvalkcLK5eqnMEU%2BhAKFryyKLvrJ%2FEx1m3Dhsd9Tw6ZXv9mx4%2BLmfyCz9pf%2FEU6MJMfFhZBhP8zuatN9S6NtD4oIbCSFaYPx2MPPF38kGOqUBnTRZbKFaqsg08ub95XmT0QPHTYvT34EPmA%2BKO3gI1xMWnAIbmAhdp0ernEOVqUeGWoL8MNGFcM4QXTWAB2tWr7hrRugZa%2FFKZgABiA3Mq6hnruOhLBZAul%2FkWXHRkAdhrvlhZGPbaBz6IkjAn%2BJQDdq%2B7Jwm%2BMH9r7UnI%2FDeTpT5Y8u%2BK70hUz0GBT2OV%2FyyJUkJAIPMz7lfRD0by%2B7HnZHNTABy&X-Amz-Signature=bbca3404c32c52cc8dffd16cbfac880b4e7112e9a96132d4073089511d285256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS53SPLK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb8pE2kiXpo%2FhAaYbPXnYkIyz2tRHwidVMbnXH41J5dgIgRdYUNWvNiY6AQLVBNgGPUIcVJ5ceeCM8RFo6o2SgT70qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOR5egG0KDIuMeqZNyrcA%2BpDXXes0PVPV2uNUZh%2BazZjVE39mMiFl%2FmtsLRKQvEWCcQ78Y8Hifayt4wYq8HZF8hB6wq7E8gojj%2FpH%2FyHpAcx0VE%2BcIUGP6s7VAWDuhw4yHclHd%2Bt2vXirn%2BXBdJTeHWD6GKXz5WPZk7%2B8BO4XCTA7NWVbkBpWGOXfWaJq6F2Bhn9IRYqC51OHWXgawLG5teVclnbg2uzfOWCXEDmV8PbhwvDCXNwwNV7xvopL83Uqfl%2FNghK7YGv7McT3GydMos%2F5R%2BzSKnyPlfyDaIGGxTLRM7SfQ8xzW7e8Joj8W2JF7D%2Fmza3u9WrFvW3HRjieDlRqKVdnKGzzPgw7O0vAFQbJM2zpakm7k42aNa0PZYTUXHDPjVhZGYjMKmKWc9ykJ0ztdfMUpEQXfo8cOvQD9cOe1wIpfGmdvxmo3%2FMrcPw%2BzZbuIDG4i0QTDhKrVHl%2FCcl9ZFuaux0b5Sq4aO2PnKDWlyc9IpR7nKd%2FUHFp6o3GE83R1fvQrNz0TUkF%2BX1KpGYsxFDRTbbplcljJI5vW%2B4K7hIvalkcLK5eqnMEU%2BhAKFryyKLvrJ%2FEx1m3Dhsd9Tw6ZXv9mx4%2BLmfyCz9pf%2FEU6MJMfFhZBhP8zuatN9S6NtD4oIbCSFaYPx2MPPF38kGOqUBnTRZbKFaqsg08ub95XmT0QPHTYvT34EPmA%2BKO3gI1xMWnAIbmAhdp0ernEOVqUeGWoL8MNGFcM4QXTWAB2tWr7hrRugZa%2FFKZgABiA3Mq6hnruOhLBZAul%2FkWXHRkAdhrvlhZGPbaBz6IkjAn%2BJQDdq%2B7Jwm%2BMH9r7UnI%2FDeTpT5Y8u%2BK70hUz0GBT2OV%2FyyJUkJAIPMz7lfRD0by%2B7HnZHNTABy&X-Amz-Signature=78335dd3bc7088c1d1e7904f4397eb03d7e3a43bbf45a0dda1f52e6d964ef911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

