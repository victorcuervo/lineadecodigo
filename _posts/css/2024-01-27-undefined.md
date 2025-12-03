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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCMMUJ45%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T042327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICtPeiQUcPm9QL3u38Ftc%2B%2BxKIO6ZlDc13pI9X%2FgNZN3AiAMnfGvt0xYpTAUd1n%2FN1s71qIFq%2FMv1EAT%2FEd9HAn5DCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMTDS6ZT%2BNKelqPwsaKtwD2dyiGJAwf321aRZ4V9jqCR6h7U8ofSewXmTDlG45%2BSUi5uYXYY1%2BhrbAXwXHQ3TTp13jb5i5oc4D2S1qFHWZPeism32bbIX398794AzdBNDSMSygv9Y2lqBzFVy2rSCZmqPH7olb0wbh%2Bg9%2FjLNiQtICBXvgVVT7RhkQ7hx7bBh6KuF%2B7t%2B44lKBMpCrcQNHuvY2iK7s%2FkXVCv7tWd%2FUFQvWWM62ud1sZPKMqVFg9cdUbUpJIwI4q54IXBHc9SxfeZdOkX4cjTWTnd3nbBsMHxMH1Os2sySQC5Wc81ZtwxEAWu8UrytRW6N8N0%2B9uEp67OBGRcVbPq5IHj9U1sNf4TkwAT5BHY8Tn5j0PhEQ19%2F1%2F%2FcpmP5208HDu0Q5sQSfVmoW5WCR8KfR0lXje9gUqN%2F9K6xwxHCvEgC0%2BRmWYmWHJr6aK9pOsFlYyXF5uscNaRUojN0vX%2BNAliBGsH%2FIeE%2FlecfSmT97h3ACtIqgL0DK8MNduG7n7lEAuCMymnJb10Vq9DTnKMPSgipfh3L22TUpXe%2FXbrH%2BV2TO5G2rqV5Ot2q5C2Bwif10nzwA9ooi%2FYM9ovcPZEy%2FEbvfjDRBs0iSsB9bM4c1rE%2FVnbZe%2FgkTeZtYXG7U%2F2H964MwpJa%2ByQY6pgHik1c2OeiR7xz%2F7%2BtDo%2BQElFI74HmRsMttYNV4Mnx5ZDG5OcezPhBfmVDoeQBqySAxLOMYn2tbgVGFyOfHVTZZ0rGSHWo7nrrfeMzRDD36GwhA%2FuJ6sdF6B%2FaBYWRUtwCjzHi19FZCbO21gr8gROGS4tO5spW6ZsU2EXTKcwbLrdWotqclMkMULem6%2BJfF8vQ%2FXL%2FZtyhgdPsP9Uy8N0ouSZX62d%2Fk&X-Amz-Signature=092f50a841627aa7c2cde9f829a979423bf1b322d4730b7cd046ec263dd02cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCMMUJ45%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T042327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICtPeiQUcPm9QL3u38Ftc%2B%2BxKIO6ZlDc13pI9X%2FgNZN3AiAMnfGvt0xYpTAUd1n%2FN1s71qIFq%2FMv1EAT%2FEd9HAn5DCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMTDS6ZT%2BNKelqPwsaKtwD2dyiGJAwf321aRZ4V9jqCR6h7U8ofSewXmTDlG45%2BSUi5uYXYY1%2BhrbAXwXHQ3TTp13jb5i5oc4D2S1qFHWZPeism32bbIX398794AzdBNDSMSygv9Y2lqBzFVy2rSCZmqPH7olb0wbh%2Bg9%2FjLNiQtICBXvgVVT7RhkQ7hx7bBh6KuF%2B7t%2B44lKBMpCrcQNHuvY2iK7s%2FkXVCv7tWd%2FUFQvWWM62ud1sZPKMqVFg9cdUbUpJIwI4q54IXBHc9SxfeZdOkX4cjTWTnd3nbBsMHxMH1Os2sySQC5Wc81ZtwxEAWu8UrytRW6N8N0%2B9uEp67OBGRcVbPq5IHj9U1sNf4TkwAT5BHY8Tn5j0PhEQ19%2F1%2F%2FcpmP5208HDu0Q5sQSfVmoW5WCR8KfR0lXje9gUqN%2F9K6xwxHCvEgC0%2BRmWYmWHJr6aK9pOsFlYyXF5uscNaRUojN0vX%2BNAliBGsH%2FIeE%2FlecfSmT97h3ACtIqgL0DK8MNduG7n7lEAuCMymnJb10Vq9DTnKMPSgipfh3L22TUpXe%2FXbrH%2BV2TO5G2rqV5Ot2q5C2Bwif10nzwA9ooi%2FYM9ovcPZEy%2FEbvfjDRBs0iSsB9bM4c1rE%2FVnbZe%2FgkTeZtYXG7U%2F2H964MwpJa%2ByQY6pgHik1c2OeiR7xz%2F7%2BtDo%2BQElFI74HmRsMttYNV4Mnx5ZDG5OcezPhBfmVDoeQBqySAxLOMYn2tbgVGFyOfHVTZZ0rGSHWo7nrrfeMzRDD36GwhA%2FuJ6sdF6B%2FaBYWRUtwCjzHi19FZCbO21gr8gROGS4tO5spW6ZsU2EXTKcwbLrdWotqclMkMULem6%2BJfF8vQ%2FXL%2FZtyhgdPsP9Uy8N0ouSZX62d%2Fk&X-Amz-Signature=3e274ffd606ebc1a9b1ce9a9983f0d5fa95ee5a3a2d0dd51b1a5ef5ea8c18e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

