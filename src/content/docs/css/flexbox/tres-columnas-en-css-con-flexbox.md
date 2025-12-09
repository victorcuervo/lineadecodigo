---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAUAWRI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSie03hEzIpVI%2FqfQ0eKDk%2BPXClNztwqRjPAG9vpxfjgIhAOrCBSldqqLwd25ZGU8namp2KJ8M0WAEljaBOJWBzIjsKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKSBXJc4B51RmzahEq3AM4oTEIGdVqUoOQ9I%2BvIUsrGg5vw7QvaBrZGziz555TeFWNbHtU1k5n%2FOrrjdkOELne2fQdkJtrQP8ovVdGVHRon2A%2FGDLS5gGfogm5n%2FmA2bHV6rbf4xmeEwx89npFhHoLjPtRmYhTLtYPnsIka%2BVUJTIYPFQaUS6GrVMI1bB3EwzQynE4WayIB9qNDae%2FjtqsbUpJ%2FzLrmcYPqTVIXds2qnJ0Bt59vbTlaki0NamZ5fGSByivbGgO8Xj83syhW75si8yBFXfHLGmDCE0ePNffZvRNXugOqlCMD%2F2VpuI%2BaKFhFPUvtfZdtYGDR6bHhPvS3Tu5mywcq55VZE8Jx0MLiQqC3C7KiwEECs0DThsI3NHD98XQvufC4LrwmD6eqHYFMUHs4s7EiMWPmGNUGa75jF2Yw80uVsw4nA093K0hVBTX7GykDiYDHem6%2B83YUuT6EBcFembxAzQ9cJ4vj77ricyK3zr4Y4FsalL%2FWiFUuNSbG99%2B%2B8JBHHlNvEremUfPjVtncapLaQeafplxR1nONgVa6cCbJo3gSOFEInCA6cP5txCgBwB%2FJ5sPPlMZkH8v7%2FYRuKCIGMjGnIY0pCqlCcQ9HACloWdeIxFEFliskbD7z5QjTQzGAQbP7TCRxd%2FJBjqkASCrBiaP2%2F203FiePWQ5IMMcYJBuVxLvb2pVsfRI7Ux%2FEe19fJ8mx98JxR63kqnaauAOMZuPW50KOp8uYVQcrzLRakcRPIFvwb9E6Oh%2BGzAQtNRoLc4QAtk5uSE1JmfrWmFhaLC0H%2B21ISbctqY4BRgb36DZxyxW38MmZptvq6ovWGM%2FEELfCJAKI0slElqz1zVfG6qsP%2FkN7Ur2h3CZJ%2BvcuR%2BG&X-Amz-Signature=a6b683c2fdcaf8c58b43ec07e7144e92eb11a1c57c76f8ce55f0923395af6518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAUAWRI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSie03hEzIpVI%2FqfQ0eKDk%2BPXClNztwqRjPAG9vpxfjgIhAOrCBSldqqLwd25ZGU8namp2KJ8M0WAEljaBOJWBzIjsKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKSBXJc4B51RmzahEq3AM4oTEIGdVqUoOQ9I%2BvIUsrGg5vw7QvaBrZGziz555TeFWNbHtU1k5n%2FOrrjdkOELne2fQdkJtrQP8ovVdGVHRon2A%2FGDLS5gGfogm5n%2FmA2bHV6rbf4xmeEwx89npFhHoLjPtRmYhTLtYPnsIka%2BVUJTIYPFQaUS6GrVMI1bB3EwzQynE4WayIB9qNDae%2FjtqsbUpJ%2FzLrmcYPqTVIXds2qnJ0Bt59vbTlaki0NamZ5fGSByivbGgO8Xj83syhW75si8yBFXfHLGmDCE0ePNffZvRNXugOqlCMD%2F2VpuI%2BaKFhFPUvtfZdtYGDR6bHhPvS3Tu5mywcq55VZE8Jx0MLiQqC3C7KiwEECs0DThsI3NHD98XQvufC4LrwmD6eqHYFMUHs4s7EiMWPmGNUGa75jF2Yw80uVsw4nA093K0hVBTX7GykDiYDHem6%2B83YUuT6EBcFembxAzQ9cJ4vj77ricyK3zr4Y4FsalL%2FWiFUuNSbG99%2B%2B8JBHHlNvEremUfPjVtncapLaQeafplxR1nONgVa6cCbJo3gSOFEInCA6cP5txCgBwB%2FJ5sPPlMZkH8v7%2FYRuKCIGMjGnIY0pCqlCcQ9HACloWdeIxFEFliskbD7z5QjTQzGAQbP7TCRxd%2FJBjqkASCrBiaP2%2F203FiePWQ5IMMcYJBuVxLvb2pVsfRI7Ux%2FEe19fJ8mx98JxR63kqnaauAOMZuPW50KOp8uYVQcrzLRakcRPIFvwb9E6Oh%2BGzAQtNRoLc4QAtk5uSE1JmfrWmFhaLC0H%2B21ISbctqY4BRgb36DZxyxW38MmZptvq6ovWGM%2FEELfCJAKI0slElqz1zVfG6qsP%2FkN7Ur2h3CZJ%2BvcuR%2BG&X-Amz-Signature=37630b212125c7c892eaf8480c0860790480ec21448a162659b9657bb77b084c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

