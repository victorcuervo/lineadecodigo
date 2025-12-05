---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXI5RI6V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSfHJ%2FJ05DIgxnmBqkYtVEmMPa7bH9gVRK1D7WZC6j2AiEAv7%2Fbf8fjXWCtaPzxUtL5Wq5NzU7IBue9jd8DMlp3xYkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFB8dzlaRtH4Bv40XCrcAxzu5%2BdC1WBOISzkFFq%2BjGTfsMYBJkO%2F9rDxVuSk6Qyo6fQzefzXapuY5iphdSkdXlIOPT2gCWLKZLjwaXYf0nBGHFQ7empwtsfDg5KpeCcYb5795yPERm806voNCG7ogXoQA3YolNGfskvGNZx2NMKt5qymHwoE73Qz4dG4AddSuiZnmPmISj8LF4%2Fq5WjhD%2BFaOA3WxatuTClFm6lbboY8EOfO8XuUoa%2BlaBfjOQSmAhK74ikdZ8s17YWmwM3QFhqI2CgXinQMmdwKbQ37RcefFKs1Pz2%2BLY826A%2F8KfEQxIldl%2BD4XkMXU2I%2BCVFPKLmVBcQUD80n6LGCN3%2FsiBItraEuGsw9HgFJTWIBp%2FGQ5wh7%2BcUn%2FJZc7Jc4qZbt16eWC834BtVe%2Bbu0XziqrAFEgqIikeEbzBy%2BPasuve%2FQ%2F1FxebGxI2rhK5d5jhf8occcSNoCRJJQtOWRox7UktuTHlVwjpgvL0dXBZvKApT4mDbvQy5RZMyggteAmxM6YSKlciKOG8xpDsqV6It8pEkqr6BMjy8bVKA9joblnBDkGiQKCRDVCZPs04ICsTKmp8a%2FFkrCdCTqxzAVMMvx4e1J0Vl1cp203xAlcXbZfGB1GN1lhys%2FoSv%2Bd%2FKoMLHQyskGOqUB3WoDkx3IBGk8R55Kh55zFQoQpbwZv9p79493KTSd3y3oYB17f7jxuaRRTG79VX9PiPKZwdJuiDE5Xr0ZIaI588I3sUNrD5NyH9X86cTv6ohIhdfFgAm4oj6SgNhZgtcrCtTyLqlHDiK9fGvE1DQ0bjgXwqcY%2FPTHOAcdD%2F54HfcQlBYMv4ZDOKmHBSVHBwhb%2FcRIFHiNuUpQSy%2BJ8%2F23DGXGrVMa&X-Amz-Signature=fda91b14ddbf2ea2f8d7f28b123cfbc18d174b888274ed63fe45811838e577aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXI5RI6V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSfHJ%2FJ05DIgxnmBqkYtVEmMPa7bH9gVRK1D7WZC6j2AiEAv7%2Fbf8fjXWCtaPzxUtL5Wq5NzU7IBue9jd8DMlp3xYkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFB8dzlaRtH4Bv40XCrcAxzu5%2BdC1WBOISzkFFq%2BjGTfsMYBJkO%2F9rDxVuSk6Qyo6fQzefzXapuY5iphdSkdXlIOPT2gCWLKZLjwaXYf0nBGHFQ7empwtsfDg5KpeCcYb5795yPERm806voNCG7ogXoQA3YolNGfskvGNZx2NMKt5qymHwoE73Qz4dG4AddSuiZnmPmISj8LF4%2Fq5WjhD%2BFaOA3WxatuTClFm6lbboY8EOfO8XuUoa%2BlaBfjOQSmAhK74ikdZ8s17YWmwM3QFhqI2CgXinQMmdwKbQ37RcefFKs1Pz2%2BLY826A%2F8KfEQxIldl%2BD4XkMXU2I%2BCVFPKLmVBcQUD80n6LGCN3%2FsiBItraEuGsw9HgFJTWIBp%2FGQ5wh7%2BcUn%2FJZc7Jc4qZbt16eWC834BtVe%2Bbu0XziqrAFEgqIikeEbzBy%2BPasuve%2FQ%2F1FxebGxI2rhK5d5jhf8occcSNoCRJJQtOWRox7UktuTHlVwjpgvL0dXBZvKApT4mDbvQy5RZMyggteAmxM6YSKlciKOG8xpDsqV6It8pEkqr6BMjy8bVKA9joblnBDkGiQKCRDVCZPs04ICsTKmp8a%2FFkrCdCTqxzAVMMvx4e1J0Vl1cp203xAlcXbZfGB1GN1lhys%2FoSv%2Bd%2FKoMLHQyskGOqUB3WoDkx3IBGk8R55Kh55zFQoQpbwZv9p79493KTSd3y3oYB17f7jxuaRRTG79VX9PiPKZwdJuiDE5Xr0ZIaI588I3sUNrD5NyH9X86cTv6ohIhdfFgAm4oj6SgNhZgtcrCtTyLqlHDiK9fGvE1DQ0bjgXwqcY%2FPTHOAcdD%2F54HfcQlBYMv4ZDOKmHBSVHBwhb%2FcRIFHiNuUpQSy%2BJ8%2F23DGXGrVMa&X-Amz-Signature=d8dd1a1fb68fa9a48441dd6bab76ead7daf24b6bb63814b5c70db8e887fbc6c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

