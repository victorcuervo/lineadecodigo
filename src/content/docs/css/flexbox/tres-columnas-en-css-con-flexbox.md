---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624HGDBXX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXzI3vNeAC3IL6HfS3%2FPT%2Fh7Q9BCaElAlFyyT0UICl3AiEAzxTwht7BOQZaZpjvXNaZYfbWiaVeBUC9a%2BUO7iP6ivoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIoisc2AX3ufFCMJMSrcAxFWyS%2FVQkPfrZlct%2Fncl3HEBUA6Rp3lp9gcuUjiCvHN%2Bv4g2u2WhPYLmQvs4%2Foo1tzmfjyEEhgpMM8DjsHDg%2FQM4fR9LxEZy2bjDkklt%2BIhZh6QpKK%2BSYsl67EiRZ4iqaYMzm1r1dE7J4tSqSjGDQj0FFnzKVI0SoAT91TFpzFEBOVL5qXUlvlOuhVJUxmvkdFlQXzJstoyDIag6LeoCWSMNYX00%2FuY0dJh6yY9e9LtcpmHfxd6uVqIILhwOTDEQmlqNRke3K0gS0qT1nX5GBR6FIKyflxD33LeW4N0ceHFw%2B7dO1JuEjT1jE%2FXQd7hkyGdIHipWsTFeTrnObr3q3j67nj1tfl5do1xX4qABGfMaPvhupPhAiGtFmk5yrKDH%2F2Bim0GS746e9eV1xAL%2FqJOl9HRbXfoT71h3yu8BCYcVjaxoCf%2BWnzy8Yo0OMThLKAQkmwwpu7%2FGTdQGqZjem%2FP7ZLwMZYvL360lG3BuLlXuJo%2BYhMXtwEUh6kILHGOkRXUdz6HN896uCsuCuttIOwI9unnAySzBTKARab9ChSMo5KwLlvJ4c%2FwWTK7zfaNl17qTdI5YV7TZRHPs0%2By2f64vMCbgmAFVI%2BAfkJas64Jc%2FlC9xyiRdBHEdC5MNDT0skGOqUBzsNtsRl3N9jDC6r4HN%2Btd%2BxVOG8kKXMf0enDQe0tbCcOwBzpX79GBRpLgwul4k6M9iZVU34KhAjIcRB79YN0qdPbvd5BuAqhN6NInDq0ZCE98pESeT4B7WQKHZp%2FtErQJy4TaHv0zWtw43N6143PJOVU0JG0qUCANG%2Bhe7CCN4TnmdDyLicE6g5FisslXHoLNfSkez6q%2FC%2BoCEIMeWpnhayY1aOq&X-Amz-Signature=bfe18c06974d1c20d454198bbe37b25293cf1174e6ff5b3af58137b1ae24c1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624HGDBXX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXzI3vNeAC3IL6HfS3%2FPT%2Fh7Q9BCaElAlFyyT0UICl3AiEAzxTwht7BOQZaZpjvXNaZYfbWiaVeBUC9a%2BUO7iP6ivoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIoisc2AX3ufFCMJMSrcAxFWyS%2FVQkPfrZlct%2Fncl3HEBUA6Rp3lp9gcuUjiCvHN%2Bv4g2u2WhPYLmQvs4%2Foo1tzmfjyEEhgpMM8DjsHDg%2FQM4fR9LxEZy2bjDkklt%2BIhZh6QpKK%2BSYsl67EiRZ4iqaYMzm1r1dE7J4tSqSjGDQj0FFnzKVI0SoAT91TFpzFEBOVL5qXUlvlOuhVJUxmvkdFlQXzJstoyDIag6LeoCWSMNYX00%2FuY0dJh6yY9e9LtcpmHfxd6uVqIILhwOTDEQmlqNRke3K0gS0qT1nX5GBR6FIKyflxD33LeW4N0ceHFw%2B7dO1JuEjT1jE%2FXQd7hkyGdIHipWsTFeTrnObr3q3j67nj1tfl5do1xX4qABGfMaPvhupPhAiGtFmk5yrKDH%2F2Bim0GS746e9eV1xAL%2FqJOl9HRbXfoT71h3yu8BCYcVjaxoCf%2BWnzy8Yo0OMThLKAQkmwwpu7%2FGTdQGqZjem%2FP7ZLwMZYvL360lG3BuLlXuJo%2BYhMXtwEUh6kILHGOkRXUdz6HN896uCsuCuttIOwI9unnAySzBTKARab9ChSMo5KwLlvJ4c%2FwWTK7zfaNl17qTdI5YV7TZRHPs0%2By2f64vMCbgmAFVI%2BAfkJas64Jc%2FlC9xyiRdBHEdC5MNDT0skGOqUBzsNtsRl3N9jDC6r4HN%2Btd%2BxVOG8kKXMf0enDQe0tbCcOwBzpX79GBRpLgwul4k6M9iZVU34KhAjIcRB79YN0qdPbvd5BuAqhN6NInDq0ZCE98pESeT4B7WQKHZp%2FtErQJy4TaHv0zWtw43N6143PJOVU0JG0qUCANG%2Bhe7CCN4TnmdDyLicE6g5FisslXHoLNfSkez6q%2FC%2BoCEIMeWpnhayY1aOq&X-Amz-Signature=ad85670b4121f4237a643549cb89423dc5e72d6ba5334af4c0dcebd0b2f25824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

