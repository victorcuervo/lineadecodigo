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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKK3YFU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCDOumckK%2FrFOX3s5lmzboh1y8Ovv3aegCpDg20XCjjPAIhAL%2FQ%2FG9jy%2FGOT5pXl%2FVByronlEahu9JVzdn%2BpSpbfUkhKv8DCCwQABoMNjM3NDIzMTgzODA1IgxeNapZy6doyJ8qo8Yq3AMdyZrYyG13kP3Wuc51xguNwvfeJ%2FqejuqmmjXdJSF%2B7Wi8lGgSpPQBZSWlMs3ju9a7LKV4zx0fx%2B1lTIfTPGfbvvUxFnvriHiDw%2BExISZ5uYzBB8mI%2BBQ5Ku5ufvnGKD8i8gSwrkTJamwnaTtov0kMLstaSGBvK4mD0OIYATLo6Ssim8tMVQnzQ7Khp11RKQSrW8X6jlk3JA1EalfyKzIL6%2FrlOFikte3cPrchu%2B9ZSRM1xLWyThOo8TYNMrLHEgX2Q0BLVzGrjB3sDHOrOwETx3iXriV6feI9hokL276SvPJGmREXVir7p1pDZHLtPlhbWW4AEFvQipwCcMJNBaAxP9RYegcp7sftnPr8BGImipDf6mdyC%2BdcBlol5sTvnDJD1xXiGdV%2F8NOkynFzX5YB4JDDMeg4ponAZ7u270fS1EY4JOJsTvduXDVJsN5C82aYY%2BoKkqz249sZ5Dko2Axxik47VGZ6nlY3SzJhDZEHYZ%2BoSc8ZNCgW%2BNKELy2pUdZ2FncpduIut45o54zvI%2BjDcvk%2FiG7dKlGZVKDx0ZBCmqnjuLZc1GGXbi60gQHiMOv2iIyasYDwFQMx5T7oJoL21spv36Cqe6U9RXNzaOAxafR0gyI79Dj45Kj%2FeDCArsDJBjqkAduCOtUN7T8YHpijRncMk8GXx5hTMUQ0N1CGxYO0N08w9rHehDolPEbVdnWvcwO4G%2BeteCaVHqJyv3nwKrJBAGMDpgd19d20vo%2BWG9QKOpfI07YGHpwduauUB3F2ruqKtTStY2ceqzKla1Lqmhi3r%2F%2BLPjgNEYlXN7uXynrTMgnCfXgqVk4k35OFP1UnIWoDQVeqXJRPNIhs6HRDXJYHBfphtLoM&X-Amz-Signature=bf23513734c6a89f69303f0b2319b5384d88d16f3fc6cdff5d62b7d4a7cce1e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKK3YFU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCDOumckK%2FrFOX3s5lmzboh1y8Ovv3aegCpDg20XCjjPAIhAL%2FQ%2FG9jy%2FGOT5pXl%2FVByronlEahu9JVzdn%2BpSpbfUkhKv8DCCwQABoMNjM3NDIzMTgzODA1IgxeNapZy6doyJ8qo8Yq3AMdyZrYyG13kP3Wuc51xguNwvfeJ%2FqejuqmmjXdJSF%2B7Wi8lGgSpPQBZSWlMs3ju9a7LKV4zx0fx%2B1lTIfTPGfbvvUxFnvriHiDw%2BExISZ5uYzBB8mI%2BBQ5Ku5ufvnGKD8i8gSwrkTJamwnaTtov0kMLstaSGBvK4mD0OIYATLo6Ssim8tMVQnzQ7Khp11RKQSrW8X6jlk3JA1EalfyKzIL6%2FrlOFikte3cPrchu%2B9ZSRM1xLWyThOo8TYNMrLHEgX2Q0BLVzGrjB3sDHOrOwETx3iXriV6feI9hokL276SvPJGmREXVir7p1pDZHLtPlhbWW4AEFvQipwCcMJNBaAxP9RYegcp7sftnPr8BGImipDf6mdyC%2BdcBlol5sTvnDJD1xXiGdV%2F8NOkynFzX5YB4JDDMeg4ponAZ7u270fS1EY4JOJsTvduXDVJsN5C82aYY%2BoKkqz249sZ5Dko2Axxik47VGZ6nlY3SzJhDZEHYZ%2BoSc8ZNCgW%2BNKELy2pUdZ2FncpduIut45o54zvI%2BjDcvk%2FiG7dKlGZVKDx0ZBCmqnjuLZc1GGXbi60gQHiMOv2iIyasYDwFQMx5T7oJoL21spv36Cqe6U9RXNzaOAxafR0gyI79Dj45Kj%2FeDCArsDJBjqkAduCOtUN7T8YHpijRncMk8GXx5hTMUQ0N1CGxYO0N08w9rHehDolPEbVdnWvcwO4G%2BeteCaVHqJyv3nwKrJBAGMDpgd19d20vo%2BWG9QKOpfI07YGHpwduauUB3F2ruqKtTStY2ceqzKla1Lqmhi3r%2F%2BLPjgNEYlXN7uXynrTMgnCfXgqVk4k35OFP1UnIWoDQVeqXJRPNIhs6HRDXJYHBfphtLoM&X-Amz-Signature=750e094c1fdac9a56ffce210f6b5a0c99d614a3facc42f7f71f916e377bbf562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

