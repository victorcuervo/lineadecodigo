---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667G63T4H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD3xqdcNnQuBxpI0aomGu%2FfPkpHfpF1RhbGlbvuOycpUAIhAKJB6hMEPsWX3KL21QD9M9E3v7s5ZR7sMOLObcB%2Fl%2FP8Kv8DCCIQABoMNjM3NDIzMTgzODA1IgxnbL%2FmIF69xheyhZwq3AMvDs2KONrSsgcFNoh2mJYE3XdCm2RO%2BkK4dZjNeH%2BIrsnpyzQvgO4Cm8B4k0gDaekl8NdayiV3LPEcOv9g7B2CQyVT1UaPlLbmOjqcU8FM2fGZceeRkCiFkKo9Hv2LH56ceuckgcrtNhW%2FYIFz68nocjMlWP%2FW%2FuNIz2xWZVbUMs76J%2FAOoFiI0SKwfR%2BGT1w%2BcylvokYXSi%2FX4AD1utPN0N2h2CukLq7j1iunZt8ozVyRW8A30iYW5Vbba98XFtDBiQuhZa3ERJuy9Uus%2BIjhUuzjITB32KvgBpXS31ioZwOGVhlnzHaIGspxU2ePWbwPbrH32chsi8d5PiOkxzIZShv5m%2B4exyGpOGSiBvq7oPCJM59GSWJm%2BfUtVBELYUPUsdEmI9%2FPZa3YGJk%2BytT7DTuwozNmP7Xau7cLTuGvAszdSRilhU%2F1vXkjWDrxvdbADhh%2BiG5xqjEHQ1ws3zQ5BBdJiiOpzY86gkCrds3wiK75pWlhZLg4%2BzcLQacpiWezmBmh%2FEErMXwFuiUIGC211SYc88pSQrX8%2FCPgPT7MNx%2FjNypRmnuLSxlqAy1jgWNfe23Ulk7hYAdA%2FnJK07%2FtWPTmn5QHOiuf5RZTURrJPzAnC%2B2Sz2luDYMqcDDHlL7JBjqkAcAb8%2Fc32KlTSZ%2FS3f6LK1H0DXPADgnRyFsWNObtP7MmNZMFK0KMYA70xqqhNHcZab8TTUkAwRhrZGzqj1o1rNQPQvbq0jF1XxxjFSxeAgu2%2B%2BuJaQ7I7jJMOlZwZUegc%2FPjR9FJJamcA5NUgHhZWYV2r6D537mp7xxXq0Tgit%2Bi5M8seiQ2GYuZOWeWcbFsG06w5Zd3u1Tj3uABQif43ygIr9Cc&X-Amz-Signature=baa7b74c1023cca0fbeb9b537464e099a23474864827504572cc1208385f2e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667G63T4H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD3xqdcNnQuBxpI0aomGu%2FfPkpHfpF1RhbGlbvuOycpUAIhAKJB6hMEPsWX3KL21QD9M9E3v7s5ZR7sMOLObcB%2Fl%2FP8Kv8DCCIQABoMNjM3NDIzMTgzODA1IgxnbL%2FmIF69xheyhZwq3AMvDs2KONrSsgcFNoh2mJYE3XdCm2RO%2BkK4dZjNeH%2BIrsnpyzQvgO4Cm8B4k0gDaekl8NdayiV3LPEcOv9g7B2CQyVT1UaPlLbmOjqcU8FM2fGZceeRkCiFkKo9Hv2LH56ceuckgcrtNhW%2FYIFz68nocjMlWP%2FW%2FuNIz2xWZVbUMs76J%2FAOoFiI0SKwfR%2BGT1w%2BcylvokYXSi%2FX4AD1utPN0N2h2CukLq7j1iunZt8ozVyRW8A30iYW5Vbba98XFtDBiQuhZa3ERJuy9Uus%2BIjhUuzjITB32KvgBpXS31ioZwOGVhlnzHaIGspxU2ePWbwPbrH32chsi8d5PiOkxzIZShv5m%2B4exyGpOGSiBvq7oPCJM59GSWJm%2BfUtVBELYUPUsdEmI9%2FPZa3YGJk%2BytT7DTuwozNmP7Xau7cLTuGvAszdSRilhU%2F1vXkjWDrxvdbADhh%2BiG5xqjEHQ1ws3zQ5BBdJiiOpzY86gkCrds3wiK75pWlhZLg4%2BzcLQacpiWezmBmh%2FEErMXwFuiUIGC211SYc88pSQrX8%2FCPgPT7MNx%2FjNypRmnuLSxlqAy1jgWNfe23Ulk7hYAdA%2FnJK07%2FtWPTmn5QHOiuf5RZTURrJPzAnC%2B2Sz2luDYMqcDDHlL7JBjqkAcAb8%2Fc32KlTSZ%2FS3f6LK1H0DXPADgnRyFsWNObtP7MmNZMFK0KMYA70xqqhNHcZab8TTUkAwRhrZGzqj1o1rNQPQvbq0jF1XxxjFSxeAgu2%2B%2BuJaQ7I7jJMOlZwZUegc%2FPjR9FJJamcA5NUgHhZWYV2r6D537mp7xxXq0Tgit%2Bi5M8seiQ2GYuZOWeWcbFsG06w5Zd3u1Tj3uABQif43ygIr9Cc&X-Amz-Signature=4707497509d9ccc14d463786a342b2adf47179bd7ce3ac2744aa10f917c3d267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

