---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JGEABG3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH6nrIvuxuQXQ0z8kTXR8L%2FmCorpoQs0SJWC05XtdT2AiBP0f6%2FzneGO%2B0o4vAyGAKU51RATE15hg5c4VlrfBo8bCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMTk8pJQUoXvLmkE5KKtwDKKS0vSHt0pbL%2F1A4vRH8gTAW%2FzUYES8bGLRebjVN%2FkjQNAvjM6MQw9iiZ%2B8iEJq%2BgvVF1MrjKCdkLmX8%2FqHutM%2FQQ4hArvo8drzc%2FxjJ916fQ8DeLen7aD0qZHK4YyKF54FsU4HVX53dTulkC%2FtU5DYsPke1w0v0IaLIvIJXAbakNGCEr%2Bj6n4Dgt7LkLuOCe3pXcbcLrKoNEOY6jroBauQhVSz%2FoVkpNdfxnpnktJI3BtA5Vnpy739ybzccEj4TgdiD%2FbK9oiuntrxLL7MI6SeAz%2Bs2aHcOfwmyCKrzUryyPy0%2FjbcVVwacwEYfH6Qi3R4K8MSo3mWHa9aQJOKnfuvUO%2BrS651o0yMLQ0DLuQU5lmtZ0DDfhVmnXUyIscRaSwmyqspD65xUqDM6Bb3JCxlV74VMb52Nqj%2FX8%2BpqKCTH5RMkd9neVmeQGFh2uM8lx8oQK4hC3IO%2FuAAR0mWCR0VHgv4TLpQw%2BQ5scgVuALKLVikm4rih12A5Wujv%2F8IhT%2FupwJM%2BOHgK42WStbgUGwrCgTY%2BZlgXND4831ltBapQNRPmfGFuhqoHElic57qSDpdzkZUsOPx0EtMlCt6ox353ecbhhIyuLpL8fKOw%2Bd%2FyG6gwYNasq3wsJg0wyMrRyQY6pgG7lGx%2BeZTEN1vwPva56Lag%2FQgOxPwQ11IT3vCZ%2FdGDQv2lhJWsG0v2OwCZKBJ8GdEVbkw7SDjUYgUjbJ%2BXt0%2B0EqoQvUEWWYLITM14JoiaQSsawLeJDYEQVbnye6ljuKbRel%2BLUbP%2F22FmMqBSTIQHtvfJBiCyDLKJTXPwCRLuChz2mdgIYykwZj06DI2ErdpIvOlCcHPS0BUvlosDXULA373Mbusz&X-Amz-Signature=eb46e16ffd854485ccf20c1cb66046c7a917c9884c9c7e3fb5a29f077d00bbba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JGEABG3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH6nrIvuxuQXQ0z8kTXR8L%2FmCorpoQs0SJWC05XtdT2AiBP0f6%2FzneGO%2B0o4vAyGAKU51RATE15hg5c4VlrfBo8bCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMTk8pJQUoXvLmkE5KKtwDKKS0vSHt0pbL%2F1A4vRH8gTAW%2FzUYES8bGLRebjVN%2FkjQNAvjM6MQw9iiZ%2B8iEJq%2BgvVF1MrjKCdkLmX8%2FqHutM%2FQQ4hArvo8drzc%2FxjJ916fQ8DeLen7aD0qZHK4YyKF54FsU4HVX53dTulkC%2FtU5DYsPke1w0v0IaLIvIJXAbakNGCEr%2Bj6n4Dgt7LkLuOCe3pXcbcLrKoNEOY6jroBauQhVSz%2FoVkpNdfxnpnktJI3BtA5Vnpy739ybzccEj4TgdiD%2FbK9oiuntrxLL7MI6SeAz%2Bs2aHcOfwmyCKrzUryyPy0%2FjbcVVwacwEYfH6Qi3R4K8MSo3mWHa9aQJOKnfuvUO%2BrS651o0yMLQ0DLuQU5lmtZ0DDfhVmnXUyIscRaSwmyqspD65xUqDM6Bb3JCxlV74VMb52Nqj%2FX8%2BpqKCTH5RMkd9neVmeQGFh2uM8lx8oQK4hC3IO%2FuAAR0mWCR0VHgv4TLpQw%2BQ5scgVuALKLVikm4rih12A5Wujv%2F8IhT%2FupwJM%2BOHgK42WStbgUGwrCgTY%2BZlgXND4831ltBapQNRPmfGFuhqoHElic57qSDpdzkZUsOPx0EtMlCt6ox353ecbhhIyuLpL8fKOw%2Bd%2FyG6gwYNasq3wsJg0wyMrRyQY6pgG7lGx%2BeZTEN1vwPva56Lag%2FQgOxPwQ11IT3vCZ%2FdGDQv2lhJWsG0v2OwCZKBJ8GdEVbkw7SDjUYgUjbJ%2BXt0%2B0EqoQvUEWWYLITM14JoiaQSsawLeJDYEQVbnye6ljuKbRel%2BLUbP%2F22FmMqBSTIQHtvfJBiCyDLKJTXPwCRLuChz2mdgIYykwZj06DI2ErdpIvOlCcHPS0BUvlosDXULA373Mbusz&X-Amz-Signature=80fd5d12f19e9697c04e0235a97ad88da1bedfea54fab1fe81d258f9d474f4ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

