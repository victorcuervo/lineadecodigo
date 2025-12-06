---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ISBZNBX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEzcSoTr%2BCquxN3%2BgQ2RvzsDzIYanWN1JHHkXZR35a%2FAiBGZ2N05fxffAGYXzdhl3aOO%2BJQ9lu%2F%2FMxFGIe6tA88ryr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMztzpEYU9gUQdLM1bKtwDmXZ0mAWT2oAyWQ86U4bA53iqOUTTI6ybQ%2BfhbRAycioL03lcHpPNsjz4ftH5R4qD6mI93Z7D03WIrpVekIn4oD2lQYGd3SuKZQr8OxfVVZTVtdsLAoYv3xKy8UHP2X3Bg%2Bk%2F67uKGFBmOZFYvGpjnRxxobb17c1VVFmi4y7O5PIZ3sExX%2FXalzD%2FOXGE0ZCzLADNPKjDRzAjKEtyMTV%2FqvSyYKKnhnDf39AHrimCnftAKI196c0IVKHNEsfJFShj0gQc5VshXZJtIaBlVNEuxZYAJDaLzNdrnTYeTBNKqmJKr%2FoiLLUr7vDs4nb%2Fy2rjUZhZjnUTPKJz%2FZFZQMOPKgBpiDXmGi1%2FaB7ve0w0uZuTPrR2XOSLOnKynVwPKRWReYizFCxmWIz3FNyFUVsLIjD2VllbFni76F7LRMdzUa3uW5Ve%2Fs%2Bt3ux%2F%2Bp7X9BdbciVJIzjUQK0gk5r7TllmvW1FtpdrYeOB2p%2BF1GKuY8H86Ij0baUmVKFgaHixVBtVECw1EESNUuSiGNVGrF68CHaU11jqi2Lqo3sV0m%2FU7UoaQtwYTQZ0bBzGulXCS%2FfZE3DnvgA19QZ93TORZNn8gRBuSrxCM%2FsPdeUjHsUwRq1dxz9nrgXQ7gYOtEIwt83RyQY6pgGNB4dKXqEDGEukIoTaK3FtltnRXOn7pT1G2l1EGRaWRCiUXRSq0jXq6N6rNvf4movIhixIoLWuYaIvc4n4SXwJwNQIqODt0BXnomCWOu8yFMnikl3xnvKBFl3px%2BNPVaPhqQE1CP5eRMdlMyME7fGAb1mBzrJenUTP9kEZeoJ43qjSboSj%2B129OARCDXl%2Bzyin7banmeYCZPzstzdfHcOkIuLw039h&X-Amz-Signature=e0ec075b1c0323d44ca7271e1e06f50db0f2bed98de6f5051491952a2d200562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ISBZNBX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEzcSoTr%2BCquxN3%2BgQ2RvzsDzIYanWN1JHHkXZR35a%2FAiBGZ2N05fxffAGYXzdhl3aOO%2BJQ9lu%2F%2FMxFGIe6tA88ryr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMztzpEYU9gUQdLM1bKtwDmXZ0mAWT2oAyWQ86U4bA53iqOUTTI6ybQ%2BfhbRAycioL03lcHpPNsjz4ftH5R4qD6mI93Z7D03WIrpVekIn4oD2lQYGd3SuKZQr8OxfVVZTVtdsLAoYv3xKy8UHP2X3Bg%2Bk%2F67uKGFBmOZFYvGpjnRxxobb17c1VVFmi4y7O5PIZ3sExX%2FXalzD%2FOXGE0ZCzLADNPKjDRzAjKEtyMTV%2FqvSyYKKnhnDf39AHrimCnftAKI196c0IVKHNEsfJFShj0gQc5VshXZJtIaBlVNEuxZYAJDaLzNdrnTYeTBNKqmJKr%2FoiLLUr7vDs4nb%2Fy2rjUZhZjnUTPKJz%2FZFZQMOPKgBpiDXmGi1%2FaB7ve0w0uZuTPrR2XOSLOnKynVwPKRWReYizFCxmWIz3FNyFUVsLIjD2VllbFni76F7LRMdzUa3uW5Ve%2Fs%2Bt3ux%2F%2Bp7X9BdbciVJIzjUQK0gk5r7TllmvW1FtpdrYeOB2p%2BF1GKuY8H86Ij0baUmVKFgaHixVBtVECw1EESNUuSiGNVGrF68CHaU11jqi2Lqo3sV0m%2FU7UoaQtwYTQZ0bBzGulXCS%2FfZE3DnvgA19QZ93TORZNn8gRBuSrxCM%2FsPdeUjHsUwRq1dxz9nrgXQ7gYOtEIwt83RyQY6pgGNB4dKXqEDGEukIoTaK3FtltnRXOn7pT1G2l1EGRaWRCiUXRSq0jXq6N6rNvf4movIhixIoLWuYaIvc4n4SXwJwNQIqODt0BXnomCWOu8yFMnikl3xnvKBFl3px%2BNPVaPhqQE1CP5eRMdlMyME7fGAb1mBzrJenUTP9kEZeoJ43qjSboSj%2B129OARCDXl%2Bzyin7banmeYCZPzstzdfHcOkIuLw039h&X-Amz-Signature=2affb35196688583932ea89761d37cbc309508a44ed24be8f11462e9ecf8861d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

