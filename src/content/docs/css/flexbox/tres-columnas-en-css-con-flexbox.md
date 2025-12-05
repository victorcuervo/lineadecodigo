---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FIKY7VU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlWM%2BOvzHZRYBi2t34vNnm8Fs%2Bk%2B0JnwF5UXvQA8ZZSQIhAOys5p3n2K1YpTBkjk8uDKIStZglm0lv%2Bi461Hc%2FGHV2Kv8DCGEQABoMNjM3NDIzMTgzODA1IgyxkahuNm4EY3rrJjQq3AMGqtlyfJzi3AtTDx2i%2BLk9CNhdmuNMS%2BoH0h1oOxACxs568GcpU4dX4O1dK0PtcRMKD%2BT6QXlZvri%2FCiYxKHhFCkf2boJC1TAc%2Fgn5z6GvzfPizxVC4oaKN6pZUkYAorBwr%2Fnq3RBDrcpFpHCsXfdf%2FdHUdgpaAsiLmOxjwycWrT207XwdqXE%2FP15hAmltvT9wApUUc6jMe2PkMC6GHuFfWJlSxpkHfAoLegCmR8PRKf0SDWAmWfRv2e%2FppXpHjh1L2BfnaN7G84frtfG8SFPV%2FnanzbElQU5WPO%2BzO7vaN%2F5emGZawmGepcHoKXmJQbHUQevJLJkPbW7%2Bytk7Aw4P3hFftwn%2BmbP8xoybekkN97%2BQSmREueDNMDMTWTtyRv4srC%2FsNzU8MFUUQRdONBSnqbKMhNoW%2FkeR6LB65xlVsjDDdH2JgBeSRUa4f4Ix%2BYWem3DAXzG7uaXNhcJN3Ny4p59btVcdQ9KaM7HAI5dohTgC%2FyEfakLU5hxxcfss6Hg8bgSqIsDH02iBzhEhfqIh%2BsDgZlz6%2FK1l%2BTqPiJBdSjGuGQ%2FZpIzDggpvyMpTsdKeXGK1ZiPAI5NFANlKa5AXSYE%2Flx7nl63v%2FBLCVYOVO0694cbacpERlDt90zCX%2BMvJBjqkASuiOcAZxdZGYp2qDfXQYCgmc9%2BbvJxjt%2FDcD44fKU8NwKhBtLqr6Oc1%2Fwk%2FN7%2F26Wx97oKllm5c69r2lOcxQmhHwhYuqZwy4WdoiSIsK6rL9Nya6IGoX%2FD3udBSBVA0WjxRZMfb3t2husDFh9xkkanDtlulWF1pcUGUR5L%2FOl3GJ%2F3X6vcDvEU1oFa%2FN4Q%2F7ccCsX1XcuITPtr4cJl7Jpm0J2oQ&X-Amz-Signature=7d3dea08e8ac16943af7eacf900c3f14fdfd39a41d84d644df119db377a3d57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FIKY7VU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlWM%2BOvzHZRYBi2t34vNnm8Fs%2Bk%2B0JnwF5UXvQA8ZZSQIhAOys5p3n2K1YpTBkjk8uDKIStZglm0lv%2Bi461Hc%2FGHV2Kv8DCGEQABoMNjM3NDIzMTgzODA1IgyxkahuNm4EY3rrJjQq3AMGqtlyfJzi3AtTDx2i%2BLk9CNhdmuNMS%2BoH0h1oOxACxs568GcpU4dX4O1dK0PtcRMKD%2BT6QXlZvri%2FCiYxKHhFCkf2boJC1TAc%2Fgn5z6GvzfPizxVC4oaKN6pZUkYAorBwr%2Fnq3RBDrcpFpHCsXfdf%2FdHUdgpaAsiLmOxjwycWrT207XwdqXE%2FP15hAmltvT9wApUUc6jMe2PkMC6GHuFfWJlSxpkHfAoLegCmR8PRKf0SDWAmWfRv2e%2FppXpHjh1L2BfnaN7G84frtfG8SFPV%2FnanzbElQU5WPO%2BzO7vaN%2F5emGZawmGepcHoKXmJQbHUQevJLJkPbW7%2Bytk7Aw4P3hFftwn%2BmbP8xoybekkN97%2BQSmREueDNMDMTWTtyRv4srC%2FsNzU8MFUUQRdONBSnqbKMhNoW%2FkeR6LB65xlVsjDDdH2JgBeSRUa4f4Ix%2BYWem3DAXzG7uaXNhcJN3Ny4p59btVcdQ9KaM7HAI5dohTgC%2FyEfakLU5hxxcfss6Hg8bgSqIsDH02iBzhEhfqIh%2BsDgZlz6%2FK1l%2BTqPiJBdSjGuGQ%2FZpIzDggpvyMpTsdKeXGK1ZiPAI5NFANlKa5AXSYE%2Flx7nl63v%2FBLCVYOVO0694cbacpERlDt90zCX%2BMvJBjqkASuiOcAZxdZGYp2qDfXQYCgmc9%2BbvJxjt%2FDcD44fKU8NwKhBtLqr6Oc1%2Fwk%2FN7%2F26Wx97oKllm5c69r2lOcxQmhHwhYuqZwy4WdoiSIsK6rL9Nya6IGoX%2FD3udBSBVA0WjxRZMfb3t2husDFh9xkkanDtlulWF1pcUGUR5L%2FOl3GJ%2F3X6vcDvEU1oFa%2FN4Q%2F7ccCsX1XcuITPtr4cJl7Jpm0J2oQ&X-Amz-Signature=a1046636313603b7c255bf62e632ab662ad3b6b5ea995b3be8c6214c1d2fd8f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

