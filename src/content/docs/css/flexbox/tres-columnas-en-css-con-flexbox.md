---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOHHMNI6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4MnIyUiU3jOodSw4p8OZf8BSagoZSPm2N%2FMoS9Q%2FsmQIhAKJI0T9asCTuI85tx1PwCzADYQ7vhIhYuHnciGDWc%2BS1Kv8DCGAQABoMNjM3NDIzMTgzODA1Igz5mLGf8aGF%2Fd%2BefuAq3APSl6uuKbIUSLZNdT%2Fm0NdLd%2FlzmG%2F6DIxfIQnQLZfPiE%2BFGbdC%2BcfA2FouLd4TXR7kkfpla2vfNbVcAFIsfthivjozYKT%2BjKPXDHp9doZ9gbhtcy7mGzT8JYh1eP%2BgIEOKeUIlEH61WW3I%2B61lbAucPtipTZ9ssVUFgFI09F37JgoHogRWp4B28n929vi4vEo6W5v7RVG8ukfaMFgnUp6jjy5%2FB44v9hHHYlNbPfNNfCW27BAP%2FVuP%2B6skRNl8%2B69P15hMowN6snUlriZegNIVMkTIhbSKHdfGIiktCXZlvvb47ItKFC36xrP%2Fu0UvRL970nFPXvsHfl7yAOhA5%2FgzFLj5JuTMsSnsQ4AUVaPyfcakaw30WUbuP2ey2HZEagB7g0xl%2BK0lGzFhAsvYApV0XjVGCQQxPEPDxK9dNh52OG38N6e4w57aMzUYDA8UA%2BTgRshudVUnP5jh8cRUki8qe%2BqA8p%2Bws1unsYWEWgAt7O0fPyxYBh2MCcxuo1Xc6qt1HxFigVhHsSlcVVnYut4R3%2B%2BRsN9Atr9nOYppx0xii8nEcnwhMLSUtWZm1CSkRZdN%2BzZrOFBhglWK9GPAX6iqzUQduRAk6KSd9OYa0U7YONg5wNMYM5s6eOJYADC77MvJBjqkAYnklOfZFANSgnLcL%2BGD00pwny%2B7Hovp1x%2BKmQx4ZFPGQirj3RksPDreWDbUDBzvE9bl5%2FfhEtsqcku3pNeGFi6c8c%2FW9fosLISlRG7QaMXvXiJJ0hBqHlY7D5RO3VSCgPd0DDL7yzBRqt1dpFe8FRaNcpSEKtys3q67yDe3pv%2FSw9pgjjsAKHqsSJocdqcpO4TNQheDhCwSuCZfTaOprWzyG0YU&X-Amz-Signature=710cbc44464a30d2679611a41b8c87b7e703cfd0d082de80414577c226e91bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOHHMNI6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4MnIyUiU3jOodSw4p8OZf8BSagoZSPm2N%2FMoS9Q%2FsmQIhAKJI0T9asCTuI85tx1PwCzADYQ7vhIhYuHnciGDWc%2BS1Kv8DCGAQABoMNjM3NDIzMTgzODA1Igz5mLGf8aGF%2Fd%2BefuAq3APSl6uuKbIUSLZNdT%2Fm0NdLd%2FlzmG%2F6DIxfIQnQLZfPiE%2BFGbdC%2BcfA2FouLd4TXR7kkfpla2vfNbVcAFIsfthivjozYKT%2BjKPXDHp9doZ9gbhtcy7mGzT8JYh1eP%2BgIEOKeUIlEH61WW3I%2B61lbAucPtipTZ9ssVUFgFI09F37JgoHogRWp4B28n929vi4vEo6W5v7RVG8ukfaMFgnUp6jjy5%2FB44v9hHHYlNbPfNNfCW27BAP%2FVuP%2B6skRNl8%2B69P15hMowN6snUlriZegNIVMkTIhbSKHdfGIiktCXZlvvb47ItKFC36xrP%2Fu0UvRL970nFPXvsHfl7yAOhA5%2FgzFLj5JuTMsSnsQ4AUVaPyfcakaw30WUbuP2ey2HZEagB7g0xl%2BK0lGzFhAsvYApV0XjVGCQQxPEPDxK9dNh52OG38N6e4w57aMzUYDA8UA%2BTgRshudVUnP5jh8cRUki8qe%2BqA8p%2Bws1unsYWEWgAt7O0fPyxYBh2MCcxuo1Xc6qt1HxFigVhHsSlcVVnYut4R3%2B%2BRsN9Atr9nOYppx0xii8nEcnwhMLSUtWZm1CSkRZdN%2BzZrOFBhglWK9GPAX6iqzUQduRAk6KSd9OYa0U7YONg5wNMYM5s6eOJYADC77MvJBjqkAYnklOfZFANSgnLcL%2BGD00pwny%2B7Hovp1x%2BKmQx4ZFPGQirj3RksPDreWDbUDBzvE9bl5%2FfhEtsqcku3pNeGFi6c8c%2FW9fosLISlRG7QaMXvXiJJ0hBqHlY7D5RO3VSCgPd0DDL7yzBRqt1dpFe8FRaNcpSEKtys3q67yDe3pv%2FSw9pgjjsAKHqsSJocdqcpO4TNQheDhCwSuCZfTaOprWzyG0YU&X-Amz-Signature=13327212c0e9fc012293f07a3fdcf8e04ae9fe6ae9d102a10ea78697f6a89cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

