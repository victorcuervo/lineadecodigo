---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6XHNOJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2Fs7GeRV0p4HnTDi8rd6dP026yU30PhKtSBV4nsBeUAiEAjtbF6yEK%2FjeCYi0LdTl9vjxvh3w9w9BWCvxmebe7dwIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHe%2FngYEQo5drOj%2BaCrcA3BLyr9tE32zM0XvGTGZLOO4nIA%2BJvwRPjbf2mkEuvbk2sF5h8MUIdGHlA%2BdZg7lhL4S6oOqGHl6ZBVtUpYEZfkaWBEEMKB7XSQgNYIY6Jhk7%2FdoEwqgvbveZDK%2F5Ct6eJEfutSm52%2Fx2g53BWJmefaph2cQSr6VHsPyIFu8tc6r9zcNdFTla7eQoe3N8OyXHnldgkLglesUCw5MgIjm%2B9VDswbvgdZow7TsMK8Y6it1BTaoApEUJ4%2BYX0BCgnPEhVACTfHlstAVO66z9KDqSDYlqY0h2NHeSWkh5FRMTGkiyBqKEqc3Opt6HWPeuv%2BAMUmvpPxzR%2FAVJj1gkserIKlFzbdlHVMu%2FFxTzKnPUbranKUI0f%2FkVqxzVhX9%2FWpTdMAf6rj4R0s%2Bf93WhP0D8A0dWykVqJgK1M4OrxMvlyV%2FExhjQX55wpjMpJoCEPtMZJgzjCDglcNeqq3qmDtcBJfuSZm%2BOuUMV4X6EcRvZBpW%2BU%2B8Bq5uiGyBS1fds6LDNs3nos5vmnCLO8UTnGVxq%2F2AsPNt2873BIsMcRwgMlOibYJWXxEKly8t7gx8K597YbR1AkYIeoLpsYgo7H015yYo3FHTbdxfw2nKmZGVuN2yjpGgnq10AKuebZ7kMIXI18kGOqUBMbwrshaMDaaezaZsN%2BLO0Ipnu83IAGo09JTTvz0nD5eIP7lLPocrhr58%2Fm9xAdT0MvJgrgr2uRd%2B4SEA1KKP8RUrdxassRIHwU89lr8XkMDpNDZwpyLG5ei%2F%2BSA5QWm98jTt2hreijZs%2FTBkf%2FoPNr8sYfXhZCkEuVPB1hawNKJmZ4LhB3MwW26bg%2BY9vkuZXRuB2PaKj1xPO7EIY7NTv%2BD9vAwy&X-Amz-Signature=b7831b57131d8665c1ecf69de2fcbb36b08fb96cc8b5702fe7b92d727107a556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6XHNOJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2Fs7GeRV0p4HnTDi8rd6dP026yU30PhKtSBV4nsBeUAiEAjtbF6yEK%2FjeCYi0LdTl9vjxvh3w9w9BWCvxmebe7dwIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHe%2FngYEQo5drOj%2BaCrcA3BLyr9tE32zM0XvGTGZLOO4nIA%2BJvwRPjbf2mkEuvbk2sF5h8MUIdGHlA%2BdZg7lhL4S6oOqGHl6ZBVtUpYEZfkaWBEEMKB7XSQgNYIY6Jhk7%2FdoEwqgvbveZDK%2F5Ct6eJEfutSm52%2Fx2g53BWJmefaph2cQSr6VHsPyIFu8tc6r9zcNdFTla7eQoe3N8OyXHnldgkLglesUCw5MgIjm%2B9VDswbvgdZow7TsMK8Y6it1BTaoApEUJ4%2BYX0BCgnPEhVACTfHlstAVO66z9KDqSDYlqY0h2NHeSWkh5FRMTGkiyBqKEqc3Opt6HWPeuv%2BAMUmvpPxzR%2FAVJj1gkserIKlFzbdlHVMu%2FFxTzKnPUbranKUI0f%2FkVqxzVhX9%2FWpTdMAf6rj4R0s%2Bf93WhP0D8A0dWykVqJgK1M4OrxMvlyV%2FExhjQX55wpjMpJoCEPtMZJgzjCDglcNeqq3qmDtcBJfuSZm%2BOuUMV4X6EcRvZBpW%2BU%2B8Bq5uiGyBS1fds6LDNs3nos5vmnCLO8UTnGVxq%2F2AsPNt2873BIsMcRwgMlOibYJWXxEKly8t7gx8K597YbR1AkYIeoLpsYgo7H015yYo3FHTbdxfw2nKmZGVuN2yjpGgnq10AKuebZ7kMIXI18kGOqUBMbwrshaMDaaezaZsN%2BLO0Ipnu83IAGo09JTTvz0nD5eIP7lLPocrhr58%2Fm9xAdT0MvJgrgr2uRd%2B4SEA1KKP8RUrdxassRIHwU89lr8XkMDpNDZwpyLG5ei%2F%2BSA5QWm98jTt2hreijZs%2FTBkf%2FoPNr8sYfXhZCkEuVPB1hawNKJmZ4LhB3MwW26bg%2BY9vkuZXRuB2PaKj1xPO7EIY7NTv%2BD9vAwy&X-Amz-Signature=3f9c0f057cccae62765ddaa7f4f3bbae0ef5009c73c4dd9d12a878512cfa4591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

