---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUN7OARS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy40cnwRL7xO%2FaVr3Y6zo7JOvTIMQZ1QQY6zMNdgItPwIgYKYs90q2sGUl5o6DmFjfmebQNXneJTW6b4E32CUPxtgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhuKVSZy60zZq1IlyrcA5U77Ia5JqcDztTV4IT%2FE7qnMt8RQzcamtq7BYjTeRKOG2DNmf6cGuq91pQZNghL0qejTLuUBEha0jOVi5guPWH7BzYjusmuHY4XANClnI8q898mDU9fbgECU1CfHl8KFizD2vUVwgIRwW24J8152yrseZfb4%2FWAJMC5bncJ9ZJ%2FWucHu8Zio4LdwFv99Z0bTGiwXzuFlwygk5ljn8xmmTKXyaJaYxjpneh29Hk1Ts4ZH9kmbOXbHNZYJ7M1HDQPmmSIYC3YFXlufZyas8CcsniU3X%2BBxGZ12OaaWt2zkOsGsXKtf%2FKs3LGKp4L%2F6x3lmfgqVcIkXEq%2Fq4cSLMtvcIH%2BtgjwFdnGL%2BE%2F3GQqbY%2FC%2FNd9pg7Lb0KykRDfQq%2Ff%2B6y0XE8E5kk82U2Qcm5fy9fPrpo3IPSKSOJ6k176ytPu%2FrO4aEugIPn%2B41A8LdtEYigGiMSni9LC6GSx9mL8JKUh2LzLx1ih4nLw%2F%2Biaw1gJNmYCiHffNNfYyQz6aG8xm4BfIpifxMHvhaD4kKj3s%2FprL3LoCfe2U0AVHxgf8seyNOKmBvyqn5%2Baj7gJ2dGBNcxCrRkoZoH5NrWhABn6VibGOwe%2Bre7vL34DmmsD2o5gg9rrz78g%2F6RQ8Ap8MPLy2skGOqUBSKKSQgjn6gJcr4UWoZIJRhlxMM2048TnFl9uOQJHARAusgDrFW4lyz2HfwSdnUWYOiD9%2BbgwwYrW7qsJdS6KtmEsMEU7oSk%2Bky8mrJ8GQvQk%2Fx3rQTqXgHGFzXevaI8XDm8IY9UaKfcWMa8U6y8DGhXL7Bgl5dIGjHIgCm940%2BMnd%2FRoL0DC0OAvD%2BMbg7rPbTne5FSlIWCWImC5RtB8ZgGEWZ9g&X-Amz-Signature=cb6d990549cea1479e4d7cbc2fdeec790df2caaedb81966e73d1164765cb7f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUN7OARS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy40cnwRL7xO%2FaVr3Y6zo7JOvTIMQZ1QQY6zMNdgItPwIgYKYs90q2sGUl5o6DmFjfmebQNXneJTW6b4E32CUPxtgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhuKVSZy60zZq1IlyrcA5U77Ia5JqcDztTV4IT%2FE7qnMt8RQzcamtq7BYjTeRKOG2DNmf6cGuq91pQZNghL0qejTLuUBEha0jOVi5guPWH7BzYjusmuHY4XANClnI8q898mDU9fbgECU1CfHl8KFizD2vUVwgIRwW24J8152yrseZfb4%2FWAJMC5bncJ9ZJ%2FWucHu8Zio4LdwFv99Z0bTGiwXzuFlwygk5ljn8xmmTKXyaJaYxjpneh29Hk1Ts4ZH9kmbOXbHNZYJ7M1HDQPmmSIYC3YFXlufZyas8CcsniU3X%2BBxGZ12OaaWt2zkOsGsXKtf%2FKs3LGKp4L%2F6x3lmfgqVcIkXEq%2Fq4cSLMtvcIH%2BtgjwFdnGL%2BE%2F3GQqbY%2FC%2FNd9pg7Lb0KykRDfQq%2Ff%2B6y0XE8E5kk82U2Qcm5fy9fPrpo3IPSKSOJ6k176ytPu%2FrO4aEugIPn%2B41A8LdtEYigGiMSni9LC6GSx9mL8JKUh2LzLx1ih4nLw%2F%2Biaw1gJNmYCiHffNNfYyQz6aG8xm4BfIpifxMHvhaD4kKj3s%2FprL3LoCfe2U0AVHxgf8seyNOKmBvyqn5%2Baj7gJ2dGBNcxCrRkoZoH5NrWhABn6VibGOwe%2Bre7vL34DmmsD2o5gg9rrz78g%2F6RQ8Ap8MPLy2skGOqUBSKKSQgjn6gJcr4UWoZIJRhlxMM2048TnFl9uOQJHARAusgDrFW4lyz2HfwSdnUWYOiD9%2BbgwwYrW7qsJdS6KtmEsMEU7oSk%2Bky8mrJ8GQvQk%2Fx3rQTqXgHGFzXevaI8XDm8IY9UaKfcWMa8U6y8DGhXL7Bgl5dIGjHIgCm940%2BMnd%2FRoL0DC0OAvD%2BMbg7rPbTne5FSlIWCWImC5RtB8ZgGEWZ9g&X-Amz-Signature=0c4ff338cf2cafdc2ee1a7886b906c0506b61b8a823681919a906faae915a209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

