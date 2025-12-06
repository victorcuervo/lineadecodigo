---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQABJPR6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFx7uVwo1njxSfFzqeP6XaZkEPMbgIr5HKp%2Bv99F9ucPAiEApm8OQSFYSCiIhPO36VIDecK2u9HS2FFmXezp3UvZ6Pkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMYEtqGqEPlu67RkRircA8f0%2F0dSx9WXPKxJ4SuD5yIGPSYmUq0biqjJVntRf1I4PWj2%2BkDRf6S%2BtwXbg39LKralx20H%2BZep%2BJZtQPV5y54rR2aYud%2Ff2b5Zd3iCjzaIklGWIc7%2FlqcAz4p2IEToWA7OC%2BsCDfgqgYAcHmiIKnflHIgTxV71Bj6Gi1NroFQTGBwiMFrih36FSyt%2FTXhBEwxZjIP6EJlRQCF7vjPsxJANZzX9Yrg6DjpaQlLmPzANg5xexvCxJRjSl%2BvPc8bnywyQuE4BRwx9Dgis2xUA300Nx3q%2BL9e5q2kCwKyA6I1zj%2B1UqtR0A6DJ539q5PF6L5kRu2ssk3mXEim7rurnT%2BPzmp5%2Fve2xJWRwbgKtWur7xzoUrHXsLtiuWXZ%2FConavaX35brctVPQ4%2FQTd137K8KYhO2EIvCgMH6MoGbbKvSe8cAnDsxYU%2FLvdalE8fuT3MjZu3zAqJqrcVk7js6Z4jYq3ZFpl8G8SF5x9ev1Mz7vNyT68ZdDdD1XRyEtPxKuqNAbcD3%2Bubg1mjhi4ofXK1435%2BqByipuyz8ENG%2BZOTPqV4ndf28PAd%2BBEo4jUy7xrt%2BTYAkTNBfOrVgBHFGmk2B%2B0je%2BYp4F9EqcYDCOJbjOvYO8Puff4O0sk8jsMLfN0ckGOqUBfkO12uAmmHH%2FS2ut5RNbzraiLLbeD4LUOC%2B9r6Fd%2BuXtorvVC31pks1LUbPgSmAYl78hZZE%2FnpwUvsy6Wx51qqaXVxiDq%2F56sWgv079hfyuSHqmplFteRqVSG2KdquxHTVUW%2BkV0Ryl22DHCEGR1ygamh1mKdqdfiu%2FjdjK6n4h80ct8TdZyLAmymo8SSWwTTLn7sai4No6BYtXIcBbNt8WceApB&X-Amz-Signature=b10e02ef23f818ff94a73aa7e52f597779ae772699c323ed27fb341c1ca6f7a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQABJPR6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFx7uVwo1njxSfFzqeP6XaZkEPMbgIr5HKp%2Bv99F9ucPAiEApm8OQSFYSCiIhPO36VIDecK2u9HS2FFmXezp3UvZ6Pkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMYEtqGqEPlu67RkRircA8f0%2F0dSx9WXPKxJ4SuD5yIGPSYmUq0biqjJVntRf1I4PWj2%2BkDRf6S%2BtwXbg39LKralx20H%2BZep%2BJZtQPV5y54rR2aYud%2Ff2b5Zd3iCjzaIklGWIc7%2FlqcAz4p2IEToWA7OC%2BsCDfgqgYAcHmiIKnflHIgTxV71Bj6Gi1NroFQTGBwiMFrih36FSyt%2FTXhBEwxZjIP6EJlRQCF7vjPsxJANZzX9Yrg6DjpaQlLmPzANg5xexvCxJRjSl%2BvPc8bnywyQuE4BRwx9Dgis2xUA300Nx3q%2BL9e5q2kCwKyA6I1zj%2B1UqtR0A6DJ539q5PF6L5kRu2ssk3mXEim7rurnT%2BPzmp5%2Fve2xJWRwbgKtWur7xzoUrHXsLtiuWXZ%2FConavaX35brctVPQ4%2FQTd137K8KYhO2EIvCgMH6MoGbbKvSe8cAnDsxYU%2FLvdalE8fuT3MjZu3zAqJqrcVk7js6Z4jYq3ZFpl8G8SF5x9ev1Mz7vNyT68ZdDdD1XRyEtPxKuqNAbcD3%2Bubg1mjhi4ofXK1435%2BqByipuyz8ENG%2BZOTPqV4ndf28PAd%2BBEo4jUy7xrt%2BTYAkTNBfOrVgBHFGmk2B%2B0je%2BYp4F9EqcYDCOJbjOvYO8Puff4O0sk8jsMLfN0ckGOqUBfkO12uAmmHH%2FS2ut5RNbzraiLLbeD4LUOC%2B9r6Fd%2BuXtorvVC31pks1LUbPgSmAYl78hZZE%2FnpwUvsy6Wx51qqaXVxiDq%2F56sWgv079hfyuSHqmplFteRqVSG2KdquxHTVUW%2BkV0Ryl22DHCEGR1ygamh1mKdqdfiu%2FjdjK6n4h80ct8TdZyLAmymo8SSWwTTLn7sai4No6BYtXIcBbNt8WceApB&X-Amz-Signature=56839531689449c27e6c86b9966700b17613329cfea17f1fae00e01a014fc7f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

