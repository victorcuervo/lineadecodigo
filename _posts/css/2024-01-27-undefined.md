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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA2Y33AD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDISUqEuDr3Jl3v65Eov7NOsR7sDlt1lqCWMybLRFBJIgIgUcCBNlW3LisuE8ArOJmTb7tvDsDYZOA%2Fc6oWNCzFHrcq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDCLgmJZPfgBR6ZE6TCrcA2jpUFqZ905dZOHv%2FwYDR390%2FCZZ%2FVLfiud1Rqs9lotc0nSro0gIqrwXN4s5%2BlO97JjxeSQTiISVk%2FC2Hn%2B9M1thmZQLUaucQ8IbZy09AZXgckKwzPyiYBvAPyVTRuWbZHSHUhZI%2BgJJF7AT6a005cL22hxeqeP%2Fi%2F8owgZHIXTzuS7LiBNdhTlN8gYr5wFWMPOL%2Fo7NXWshQrdFWD5fDZcUT%2F9IX9gGJlMUMnKBynTxPwXDpY2OsfqOFdEj%2BM2vuyRo6wbegM4vx%2BMqeOYzp30IBBg0siZbMguDwGq%2FgF%2Fau0OeneOvKGgf5xAksHAFL3cjyYYGz5i3Z0Q%2FMqVqpiaEfyD64I3PzcBpcy8vYGOfl9eEYRnRRlOSDtjayDVCXZxT5GNXCExKB1DOBCdhUAY37pIUUkt8pnNH4Qb%2BGOI5yt9u8iwji%2B0t2wBhN39wmFg0zHNvdkl7AlEdRd6dSP92HvYgsgtiY0%2BniL3buCGTmY5KSIc7rP5mwFAFYtt9%2BN2u7Dortsd3Rb7AJX%2BMa7o3kpxSZlZQevKz2emULXRno%2BYKzkn8k7EqZqi%2By8f6gb28KCiXu1635UxeKiFnE%2BIxy7vdvOgjNW%2BsTPp%2FKBDMLn%2FN7xJFxe2XZ5XOMJWmwckGOqUBIWn4Zm14w5MJoLbrsxmobUn91AiWy34inU18%2BxTDx9btobD6CIsXL4CDrqU2egazsKcIHx%2Fw7mzFKM32Tt9HVHVsEbpjKQutlVOcT7noGRhqUTPu8BKzvx2gXFRVf3LD%2F75FC%2F25HnMutul%2BEvooGeIYpniD88WV1X16XniyzvKXqVI1ivsByHK5piPUaQ%2F3aKACEXUGVZapOH9u1VMoh35NaicW&X-Amz-Signature=76164ca05fc44b5f0d787e5e6deef5b1e673979b0a6eb1ad0b775c309bd8573d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA2Y33AD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDISUqEuDr3Jl3v65Eov7NOsR7sDlt1lqCWMybLRFBJIgIgUcCBNlW3LisuE8ArOJmTb7tvDsDYZOA%2Fc6oWNCzFHrcq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDCLgmJZPfgBR6ZE6TCrcA2jpUFqZ905dZOHv%2FwYDR390%2FCZZ%2FVLfiud1Rqs9lotc0nSro0gIqrwXN4s5%2BlO97JjxeSQTiISVk%2FC2Hn%2B9M1thmZQLUaucQ8IbZy09AZXgckKwzPyiYBvAPyVTRuWbZHSHUhZI%2BgJJF7AT6a005cL22hxeqeP%2Fi%2F8owgZHIXTzuS7LiBNdhTlN8gYr5wFWMPOL%2Fo7NXWshQrdFWD5fDZcUT%2F9IX9gGJlMUMnKBynTxPwXDpY2OsfqOFdEj%2BM2vuyRo6wbegM4vx%2BMqeOYzp30IBBg0siZbMguDwGq%2FgF%2Fau0OeneOvKGgf5xAksHAFL3cjyYYGz5i3Z0Q%2FMqVqpiaEfyD64I3PzcBpcy8vYGOfl9eEYRnRRlOSDtjayDVCXZxT5GNXCExKB1DOBCdhUAY37pIUUkt8pnNH4Qb%2BGOI5yt9u8iwji%2B0t2wBhN39wmFg0zHNvdkl7AlEdRd6dSP92HvYgsgtiY0%2BniL3buCGTmY5KSIc7rP5mwFAFYtt9%2BN2u7Dortsd3Rb7AJX%2BMa7o3kpxSZlZQevKz2emULXRno%2BYKzkn8k7EqZqi%2By8f6gb28KCiXu1635UxeKiFnE%2BIxy7vdvOgjNW%2BsTPp%2FKBDMLn%2FN7xJFxe2XZ5XOMJWmwckGOqUBIWn4Zm14w5MJoLbrsxmobUn91AiWy34inU18%2BxTDx9btobD6CIsXL4CDrqU2egazsKcIHx%2Fw7mzFKM32Tt9HVHVsEbpjKQutlVOcT7noGRhqUTPu8BKzvx2gXFRVf3LD%2F75FC%2F25HnMutul%2BEvooGeIYpniD88WV1X16XniyzvKXqVI1ivsByHK5piPUaQ%2F3aKACEXUGVZapOH9u1VMoh35NaicW&X-Amz-Signature=947a541167830f049ed58781644be5f21b690673cf968f63d6c0e7d35197560a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

