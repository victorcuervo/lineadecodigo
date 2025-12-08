---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJX2JLH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMwEZyjlpag62yHwfPqEXxSpfcz27uWbqJ6IUyqaLFDAIhAKuFxTvkultxTfmUsLdTFHjLNgkeId7XRkO27qbptFHhKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNQQOaD%2B5iPsLZcYEq3APQoPViEfEBDJHL%2BnhVg7IQZqI8wL4twE41RpSZXERgvK%2FNQ%2F5nvz6cAoRT0QRDtePOiECucv7%2FM6zd6AA%2FgbQlYWoJGB%2FZNMU2vVwQI9zWkFpjP01Lia%2BksT6Ps10TvX8QvfPlJkYa%2FCqD9HCpUXgm9CqSCUz28ITdaLxMMrpbW9NEOcQX1bpi%2BDQEeoD4kjq0bk7pM6%2FzW%2Bl%2FKANBP1jjmACWdq%2FxTLQ2D6IDLQY8m6BOW7MmyFy03fJvmOxD9CinNvXsi4hMgM2Bgbf4eypHdsKRFHZMsHqkkyPdkKTYkMSEglbiCD3nMbOKiiOC6uyfgRbE1JTim3NSlqQaJEpWYqTKp5RTRFKbYKT6QNNTEG9XX%2BoMjUMa%2FGoBbjLulEdMWd%2BTVCZ9kV4SuWUjbPcReowvt0pPXgDnxodC01BJeJRuL5izC9IR3lhL0azahhHZbXwvhZhuoQuKyNQ%2FMsQhUW0RyWaJFEgnzqEy5aq%2F7v6rSt1hw0en9bIpU708dxw7pAddPhcd1rEi0gvR7cEkscEuk5kET0Zq30EsM01TpIAO1J4n%2FP3VanXRVU7c4Hc6cVoNUOlGVqrn2RhFwIH%2F3%2BprMNPW12tjs8NL%2FLcSX1uJ7NOOs2915xq4UzDlj9vJBjqkAbse7giGNsMEAvWqoZN3K2b4ufvnMx49V11PFO0KuZePCik82YBOTnSQfcZTlVJPM6M4ujLzRE6pkzHB5MfixMbJ2c8gJi5r%2BJc81sKkygMz89ZcnQXYO20cfJEI7eonCDVQdGDpFbhV3iToNgza9UUM1kJW7cyEupXjNWse48wfPVax%2FcNKWvSR%2BOZ4TGdyDgSjiML6B9HL1FXauLig%2FdHjrLx%2B&X-Amz-Signature=fa281f0181b1a3e97d1ff7b2c8c052adaf358146975487821cf128958e780536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJX2JLH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMwEZyjlpag62yHwfPqEXxSpfcz27uWbqJ6IUyqaLFDAIhAKuFxTvkultxTfmUsLdTFHjLNgkeId7XRkO27qbptFHhKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNQQOaD%2B5iPsLZcYEq3APQoPViEfEBDJHL%2BnhVg7IQZqI8wL4twE41RpSZXERgvK%2FNQ%2F5nvz6cAoRT0QRDtePOiECucv7%2FM6zd6AA%2FgbQlYWoJGB%2FZNMU2vVwQI9zWkFpjP01Lia%2BksT6Ps10TvX8QvfPlJkYa%2FCqD9HCpUXgm9CqSCUz28ITdaLxMMrpbW9NEOcQX1bpi%2BDQEeoD4kjq0bk7pM6%2FzW%2Bl%2FKANBP1jjmACWdq%2FxTLQ2D6IDLQY8m6BOW7MmyFy03fJvmOxD9CinNvXsi4hMgM2Bgbf4eypHdsKRFHZMsHqkkyPdkKTYkMSEglbiCD3nMbOKiiOC6uyfgRbE1JTim3NSlqQaJEpWYqTKp5RTRFKbYKT6QNNTEG9XX%2BoMjUMa%2FGoBbjLulEdMWd%2BTVCZ9kV4SuWUjbPcReowvt0pPXgDnxodC01BJeJRuL5izC9IR3lhL0azahhHZbXwvhZhuoQuKyNQ%2FMsQhUW0RyWaJFEgnzqEy5aq%2F7v6rSt1hw0en9bIpU708dxw7pAddPhcd1rEi0gvR7cEkscEuk5kET0Zq30EsM01TpIAO1J4n%2FP3VanXRVU7c4Hc6cVoNUOlGVqrn2RhFwIH%2F3%2BprMNPW12tjs8NL%2FLcSX1uJ7NOOs2915xq4UzDlj9vJBjqkAbse7giGNsMEAvWqoZN3K2b4ufvnMx49V11PFO0KuZePCik82YBOTnSQfcZTlVJPM6M4ujLzRE6pkzHB5MfixMbJ2c8gJi5r%2BJc81sKkygMz89ZcnQXYO20cfJEI7eonCDVQdGDpFbhV3iToNgza9UUM1kJW7cyEupXjNWse48wfPVax%2FcNKWvSR%2BOZ4TGdyDgSjiML6B9HL1FXauLig%2FdHjrLx%2B&X-Amz-Signature=281e110a41f8aeb4e5a846602d9714fcd1f7a0f687b6fc5adee472fac77d8c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

