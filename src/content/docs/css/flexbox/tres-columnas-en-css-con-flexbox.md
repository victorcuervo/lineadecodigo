---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFR2MNWI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO82SNiSMprunFfrGkiDvssbEgzy67wPU8WAMa91RxbQIhAIQ0ZXi2RbiHhnKYPL2qcHpt861tTtpS%2Fe3ErTsgDCMiKv8DCGAQABoMNjM3NDIzMTgzODA1IgxDCa%2FDRUj0C2B38Pwq3APzKvKpUkeekMYVSHQB3QdmzeFAX7GrJEJjdGhIPWGGbhIHPbd1algNZ77dDjMeDXtTRoBOBV4yClRFY9p3j2gqVlRrP%2BVfBbaJPlyHP3KjcfvPJ8MbqV89Hd%2FWhjqv6DvETqlx5UaQFXMOYMLeyCQGB7n70B51VCZpFWAOecIKIJLHEq2EFrpl53xv4n%2FqJkfR07iZOfmeJVnCWyAOlxvhy9ZymgO2qvE1ZawdyNJ08HPlG4tObpExhp9Tsmog3XCprIy%2FTRXhf62Bqtng9nEkB8yq39wQWNJJ93LnUq8kEGqWsUBtpxqdV%2BwjRInA7y52r40UVEE6dOGYhBkgB%2FtW5%2Fp5Vv3QrLn4eHSfecDT3biJ8DNah3af%2BE%2FvH4Gq1JLb0LWmmg3WSJTf0dOimrFXZRBsbU3luA8Pmv%2FN4cUO7Fq5CIubx44blaVl8YQzoZ6L1VHzczhOtFMCo3LHkTu3pGrjwzdx07XvE1F4UXk%2BhPJxmdH2tkH9MZYb9FkapW2b%2FsCFfEl5MWBZkv2UdfKMOanYNGFAtWku%2F0766Yo4r86yah6KUx4n1emc1wVWBKFK5ArvRmjur9OuAssglVMk7MsPP5bLktXBB2qHkdUAMhk0DcAzCCbdpcXa4zCQ7MvJBjqkAfiZeG5eJa1Yo%2FI0NBgVxJ4ZReN4e2fjGBr2ZjbOeuNUfzb5a9lKX74bIA73MuGFuop8iPpyj%2FX3FyQHUeeRB%2FJ2pm5%2Fk2B7WmA0J6uEShn2%2F2XVGVCXUV%2FcuCicIBkolH3Z6QzfPp1mHkhRvreOjPNPe8o5O4SnsuUy8tlFjGpyQlkilOjdwPCAC%2B5YGt%2B0A01lcfcY3F08Apity5HBJyAC0yGx&X-Amz-Signature=c5265f4eefb14a29bedaee4379ed397489b9b734e95e71c85165b84e70cdd001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFR2MNWI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO82SNiSMprunFfrGkiDvssbEgzy67wPU8WAMa91RxbQIhAIQ0ZXi2RbiHhnKYPL2qcHpt861tTtpS%2Fe3ErTsgDCMiKv8DCGAQABoMNjM3NDIzMTgzODA1IgxDCa%2FDRUj0C2B38Pwq3APzKvKpUkeekMYVSHQB3QdmzeFAX7GrJEJjdGhIPWGGbhIHPbd1algNZ77dDjMeDXtTRoBOBV4yClRFY9p3j2gqVlRrP%2BVfBbaJPlyHP3KjcfvPJ8MbqV89Hd%2FWhjqv6DvETqlx5UaQFXMOYMLeyCQGB7n70B51VCZpFWAOecIKIJLHEq2EFrpl53xv4n%2FqJkfR07iZOfmeJVnCWyAOlxvhy9ZymgO2qvE1ZawdyNJ08HPlG4tObpExhp9Tsmog3XCprIy%2FTRXhf62Bqtng9nEkB8yq39wQWNJJ93LnUq8kEGqWsUBtpxqdV%2BwjRInA7y52r40UVEE6dOGYhBkgB%2FtW5%2Fp5Vv3QrLn4eHSfecDT3biJ8DNah3af%2BE%2FvH4Gq1JLb0LWmmg3WSJTf0dOimrFXZRBsbU3luA8Pmv%2FN4cUO7Fq5CIubx44blaVl8YQzoZ6L1VHzczhOtFMCo3LHkTu3pGrjwzdx07XvE1F4UXk%2BhPJxmdH2tkH9MZYb9FkapW2b%2FsCFfEl5MWBZkv2UdfKMOanYNGFAtWku%2F0766Yo4r86yah6KUx4n1emc1wVWBKFK5ArvRmjur9OuAssglVMk7MsPP5bLktXBB2qHkdUAMhk0DcAzCCbdpcXa4zCQ7MvJBjqkAfiZeG5eJa1Yo%2FI0NBgVxJ4ZReN4e2fjGBr2ZjbOeuNUfzb5a9lKX74bIA73MuGFuop8iPpyj%2FX3FyQHUeeRB%2FJ2pm5%2Fk2B7WmA0J6uEShn2%2F2XVGVCXUV%2FcuCicIBkolH3Z6QzfPp1mHkhRvreOjPNPe8o5O4SnsuUy8tlFjGpyQlkilOjdwPCAC%2B5YGt%2B0A01lcfcY3F08Apity5HBJyAC0yGx&X-Amz-Signature=31feb33fe6190a87051cb815b0f58f1ed17c6f6ee80befb74587c6e7d1214b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

