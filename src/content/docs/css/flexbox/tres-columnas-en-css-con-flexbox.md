---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667CHQL63%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2BgBl90aMi8rNY8cLRZWswG8ilxCQp3IB2k4ZhiWMOAIhAMP8NEBS3uC4QZT5EmxvqIFyC20M080nHIlBdzb5SzDSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfUye%2BJmgtxQQR1Lwq3AMm3FbaUhzVaFpAW1TOyij6br1dLJ1%2Be%2F4gRqup%2BiIldondxCbb9PLXdb%2BnrjFjNn7kwirwa0q1a8J9mOzxDa%2FNXm7%2BHz9qsXVzoF3X%2BzfaPC5bS%2FdhJV0Sv75z1jXoz8mk8of80IXBwu4nlIBHWsew%2BhE7NIs%2FgBOGTS%2Fubw9TbR9G27oEmtZEJbngmHNiFBdJy6TYSu2Wym0LBz89w10WIHNw%2B3XjrM2AfHAarIHFIyMIa4v6TkotynHK621n7eXJRB6xKmWZkTgjZq3Tp1k3rZr8QUKk%2BGelNnNt8bzC1MUbMP%2Fy%2B5lavsGJaR8Fn1obUWG77PNlQtsXMPWSXliyNlVkMiutYycUxvQK1BpLhvqvJmfKKSWVn1EyhPGpWZqQASD3Bqh07njdSU2%2Fxo0OdB7hArvJdEa46e0zz7OSeS62MnKRL53tLt%2FvMyP4YKuYhqh1JvCuupd%2FxmRPdZ13%2BDGgxGBgjaDi1STyhGZrrSj2jS5Up4RNLz06m75d0ChKD2hae%2BzONv7EWEDouf6Qd3GD%2FZyILAMVYlQBfWIOSazA2uYBsQ8pyoqqGe%2BqY7PvhWlWi01Ch%2FWBwhxRSR3VKPwrhjvEMSiptOsKGEsI7oOAsO8XMrHOd2VVrzD9s9zJBjqkAa8kfIkWZ0EbseCK18P4y3%2BU904GFcKetLAgmtz9fiI5kKjmbaoyeG0ttbdXLVvozZzADFBC7idKQEwFiDR%2BOs4PFHVmWMa3S%2BmdNRFkbd4e1GRmVUAhIbRPHokO7cmyHphIXmD2TrZfCWCZB5C9kf9rpxAPMH%2BNtzbCea5gzglDb8Rjn53ynJxotWTesGgXM8X%2B2rxynMZ6QKzveEMadH869v%2Bp&X-Amz-Signature=a2f2699c69b7b42596995f7bdde010756620d144b3898d552bf7265f8ea38a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667CHQL63%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb%2BgBl90aMi8rNY8cLRZWswG8ilxCQp3IB2k4ZhiWMOAIhAMP8NEBS3uC4QZT5EmxvqIFyC20M080nHIlBdzb5SzDSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfUye%2BJmgtxQQR1Lwq3AMm3FbaUhzVaFpAW1TOyij6br1dLJ1%2Be%2F4gRqup%2BiIldondxCbb9PLXdb%2BnrjFjNn7kwirwa0q1a8J9mOzxDa%2FNXm7%2BHz9qsXVzoF3X%2BzfaPC5bS%2FdhJV0Sv75z1jXoz8mk8of80IXBwu4nlIBHWsew%2BhE7NIs%2FgBOGTS%2Fubw9TbR9G27oEmtZEJbngmHNiFBdJy6TYSu2Wym0LBz89w10WIHNw%2B3XjrM2AfHAarIHFIyMIa4v6TkotynHK621n7eXJRB6xKmWZkTgjZq3Tp1k3rZr8QUKk%2BGelNnNt8bzC1MUbMP%2Fy%2B5lavsGJaR8Fn1obUWG77PNlQtsXMPWSXliyNlVkMiutYycUxvQK1BpLhvqvJmfKKSWVn1EyhPGpWZqQASD3Bqh07njdSU2%2Fxo0OdB7hArvJdEa46e0zz7OSeS62MnKRL53tLt%2FvMyP4YKuYhqh1JvCuupd%2FxmRPdZ13%2BDGgxGBgjaDi1STyhGZrrSj2jS5Up4RNLz06m75d0ChKD2hae%2BzONv7EWEDouf6Qd3GD%2FZyILAMVYlQBfWIOSazA2uYBsQ8pyoqqGe%2BqY7PvhWlWi01Ch%2FWBwhxRSR3VKPwrhjvEMSiptOsKGEsI7oOAsO8XMrHOd2VVrzD9s9zJBjqkAa8kfIkWZ0EbseCK18P4y3%2BU904GFcKetLAgmtz9fiI5kKjmbaoyeG0ttbdXLVvozZzADFBC7idKQEwFiDR%2BOs4PFHVmWMa3S%2BmdNRFkbd4e1GRmVUAhIbRPHokO7cmyHphIXmD2TrZfCWCZB5C9kf9rpxAPMH%2BNtzbCea5gzglDb8Rjn53ynJxotWTesGgXM8X%2B2rxynMZ6QKzveEMadH869v%2Bp&X-Amz-Signature=b55c875d9b3a35946b32ac2c53cec9a13bce48aab87d8f88ce7484957dad14a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

