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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC2AAOPQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEr6H9uLN3ewJ34o9%2BfCwtwsHj895DR2QJ9Y%2BhnWm8dwAiBblMMtVA9QQgR3jNGfPQd4KydULt6%2BfpSZU%2BH6ozo3Lyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMsWjoFsKumQzFI6RVKtwD%2BY5y63FVGOmMKpqaZAbICCEWcNdwgHV%2BhVXotxU2YnE7FiDvRU174uQnTziHIYxCZSe36ocrgUJC0aK1ytsYbFvHN672mMBjVIrGEklihWQ05vUd8tPZxuc3RcWIfE3gHgli8RTvqYtewlBmub7kvtVFf3JHVLi78jlP8sqt%2FnoMoSjES%2BcDdh3c%2BfgxmfwY2b%2FGj3R0aEWawRk0%2BB7UezS5JcwnCVcqewdiFspJ%2BQkqKd8qlMJACl2Mx7hQstMY8GDdVQt5cKo5ZX1IbhhHJiG1DSi6B3XxsRuZz96UHORv%2FlO%2FAIEKaXzEzPPd7pEIF5PGDjxzytABI%2BKStU4B1UbCTtujhvzvSJHKCD%2Fngle1FKbbXL5%2BIntzxSmEVM1CmdAUHQdirXIoUf2W%2FyfL3cmjPtLl1RaDSg9j2RRFsmucs2eGTD%2FIJ71L8LbrqfvZY4ZiwUBJnEFbsJni7hJ%2BeIcHyTJwX6XwFyk2MASDaJwb1MtBj%2FrR0xoSUwZMKmdz6I9XEsaI7KkmAH5JEgGi4sXfEDv%2FVbmuDtGLMR8B17QmqfsoWvFLVB16fBFwRASAWQDwBp0olyiv0Rt4XeJhPd08ogQ1MdHsjTXTtUvTb8HJ10ssmCL4CL0t%2F0wwyNrByQY6pgFw1RE53P1VnZlub%2Faz%2FC8IEXoEsbqEONA5A598igvFNucwUYh98De3CoLih5CPVMPyfOpZzBJeasOTZqfaeVqhvoxQfcPpAr6xY4c9QAEYN0wp6hAaBiJg9akMJwpZwy688i1PvpybVAgqvUQ3EqQcbMFiWNMJnUzvY4ceQPhhTafgH8s3sV6XtCQmWGyZ%2BeB9d%2FTQv7k2oClJXR2D0YfkcG1iB%2FHc&X-Amz-Signature=a071883843e61646030f71f43ac310877298ddea9e1a158e62eda9708c1ea44e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC2AAOPQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEr6H9uLN3ewJ34o9%2BfCwtwsHj895DR2QJ9Y%2BhnWm8dwAiBblMMtVA9QQgR3jNGfPQd4KydULt6%2BfpSZU%2BH6ozo3Lyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMsWjoFsKumQzFI6RVKtwD%2BY5y63FVGOmMKpqaZAbICCEWcNdwgHV%2BhVXotxU2YnE7FiDvRU174uQnTziHIYxCZSe36ocrgUJC0aK1ytsYbFvHN672mMBjVIrGEklihWQ05vUd8tPZxuc3RcWIfE3gHgli8RTvqYtewlBmub7kvtVFf3JHVLi78jlP8sqt%2FnoMoSjES%2BcDdh3c%2BfgxmfwY2b%2FGj3R0aEWawRk0%2BB7UezS5JcwnCVcqewdiFspJ%2BQkqKd8qlMJACl2Mx7hQstMY8GDdVQt5cKo5ZX1IbhhHJiG1DSi6B3XxsRuZz96UHORv%2FlO%2FAIEKaXzEzPPd7pEIF5PGDjxzytABI%2BKStU4B1UbCTtujhvzvSJHKCD%2Fngle1FKbbXL5%2BIntzxSmEVM1CmdAUHQdirXIoUf2W%2FyfL3cmjPtLl1RaDSg9j2RRFsmucs2eGTD%2FIJ71L8LbrqfvZY4ZiwUBJnEFbsJni7hJ%2BeIcHyTJwX6XwFyk2MASDaJwb1MtBj%2FrR0xoSUwZMKmdz6I9XEsaI7KkmAH5JEgGi4sXfEDv%2FVbmuDtGLMR8B17QmqfsoWvFLVB16fBFwRASAWQDwBp0olyiv0Rt4XeJhPd08ogQ1MdHsjTXTtUvTb8HJ10ssmCL4CL0t%2F0wwyNrByQY6pgFw1RE53P1VnZlub%2Faz%2FC8IEXoEsbqEONA5A598igvFNucwUYh98De3CoLih5CPVMPyfOpZzBJeasOTZqfaeVqhvoxQfcPpAr6xY4c9QAEYN0wp6hAaBiJg9akMJwpZwy688i1PvpybVAgqvUQ3EqQcbMFiWNMJnUzvY4ceQPhhTafgH8s3sV6XtCQmWGyZ%2BeB9d%2FTQv7k2oClJXR2D0YfkcG1iB%2FHc&X-Amz-Signature=456bf96e6e0eb62ad593e31e5c864a4f740de98b77f412fe40cde002983a82e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

