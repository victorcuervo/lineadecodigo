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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATF3MO2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCeR0FcqUnOClD7DkcFLxHo2lhSBX%2BeOP7khACqTlMESgIgX4souKJAjh4%2FCrSJ97d6q%2BKM%2BTNlbCorJjbYyOuhukEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDItrqAkJjwhcASKGDircAwePi6ZRI%2FAbbv9HaxtyXQhi4WXPIQ56o0MU14N2IOMn1q6siK7tDHX5lUryhKAIg%2Far%2BTsjKjjxpkO7IgNxkNbMIBc9Gcrt%2Fp6Sfdl%2BaW7UoV61XUrrs67ImGrhEG2vpiDt%2F6X%2BAmAL3oVXAcvMiE%2BG854H1YDtPgteGDlafa6K0XiUgE8d9a2kgFVws0ebzFJj7Y%2FVJPsPr9TzS21MCI%2F4shPfNz41wke%2BlBgct8IKNnRwvgnCqMo8uGrn3w2mZzci4vg8zG3%2F8qmhOQrpUDZxt9q7IOLzJWO4%2FNXyfgyZDaPW5XBiOkDbWChx3PicF24GesiT41VT0JOigph1HTS%2FAxc3b36eZ9IID3KeaDAn2%2F7uhoSFr0L5voa5klEFXk5YRWLiEqEMH0FSEe4e%2FQ5NPOSFjDtMF0NxAWKxxhdsdDc3QOqGFeLB8pt1j6Xt2lC28MzDJR8ftepOlsaTzZ4rUfhQPh1AY0v5olwWSbLi34o0vNzOwgbyew61x5HeT0UW8OHM%2FlH7wPwbsH%2BAETOKaagKj0hQJCQMfQZFgI92FFWmf1spw7Pxqwfjq7KBIw2RKOsf1d8hU%2BA2GXebVvQgT392%2Bga49LcD%2FRJh60imz3p%2BxzYJ%2Fo8hTlRlMOKav8kGOqUBujpGRj8W2LI4sNTxASOwRp7c%2BbjoJewRS9EqFeY88hl6YwckVtBOya5DAzRU03CYx42Zxm%2FY9Ly%2BW79Pj9igEC4ipuZWmhJvcLm9Xwr7q1fA23QG58o2hA0IIJKzfuGaBBw9sGF8qUjWXcTvbKudhkLaoYuT8YoT0DfX1xw9BAOGHa2VR9XZAs1TmyxuGc9xOiE%2BOkppQwUZ%2FFSXhF1Dp89eAzGI&X-Amz-Signature=ce910db0ee063d0559fa3ad76240d3bcef35a62d124afc540791b60323fc51c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATF3MO2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCeR0FcqUnOClD7DkcFLxHo2lhSBX%2BeOP7khACqTlMESgIgX4souKJAjh4%2FCrSJ97d6q%2BKM%2BTNlbCorJjbYyOuhukEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDItrqAkJjwhcASKGDircAwePi6ZRI%2FAbbv9HaxtyXQhi4WXPIQ56o0MU14N2IOMn1q6siK7tDHX5lUryhKAIg%2Far%2BTsjKjjxpkO7IgNxkNbMIBc9Gcrt%2Fp6Sfdl%2BaW7UoV61XUrrs67ImGrhEG2vpiDt%2F6X%2BAmAL3oVXAcvMiE%2BG854H1YDtPgteGDlafa6K0XiUgE8d9a2kgFVws0ebzFJj7Y%2FVJPsPr9TzS21MCI%2F4shPfNz41wke%2BlBgct8IKNnRwvgnCqMo8uGrn3w2mZzci4vg8zG3%2F8qmhOQrpUDZxt9q7IOLzJWO4%2FNXyfgyZDaPW5XBiOkDbWChx3PicF24GesiT41VT0JOigph1HTS%2FAxc3b36eZ9IID3KeaDAn2%2F7uhoSFr0L5voa5klEFXk5YRWLiEqEMH0FSEe4e%2FQ5NPOSFjDtMF0NxAWKxxhdsdDc3QOqGFeLB8pt1j6Xt2lC28MzDJR8ftepOlsaTzZ4rUfhQPh1AY0v5olwWSbLi34o0vNzOwgbyew61x5HeT0UW8OHM%2FlH7wPwbsH%2BAETOKaagKj0hQJCQMfQZFgI92FFWmf1spw7Pxqwfjq7KBIw2RKOsf1d8hU%2BA2GXebVvQgT392%2Bga49LcD%2FRJh60imz3p%2BxzYJ%2Fo8hTlRlMOKav8kGOqUBujpGRj8W2LI4sNTxASOwRp7c%2BbjoJewRS9EqFeY88hl6YwckVtBOya5DAzRU03CYx42Zxm%2FY9Ly%2BW79Pj9igEC4ipuZWmhJvcLm9Xwr7q1fA23QG58o2hA0IIJKzfuGaBBw9sGF8qUjWXcTvbKudhkLaoYuT8YoT0DfX1xw9BAOGHa2VR9XZAs1TmyxuGc9xOiE%2BOkppQwUZ%2FFSXhF1Dp89eAzGI&X-Amz-Signature=0d07b4d4463b00e49c3c5b2b100edb73e66beb33f644ef824d63ea7ab6457e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

