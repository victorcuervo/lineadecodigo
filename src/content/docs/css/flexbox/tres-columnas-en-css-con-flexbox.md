---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSJT7E2Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T122526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi8I1teBeZ2qE1c0qHuz%2BhorndO4mX9%2BiY8DBzyuYN%2FAIhAOhN1iuk5HXz%2FYIetG3MucKX2VbfULk8D84ygh952cwvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz15pE6FKvyhNo1iv0q3APZ8%2FXeX40GwOJijfhLHdxK3kibjqC0f6byzK6BggXC6GWxZejgNbmfN%2BUrG1GYKoHj5w%2FRZfwnBVDGtKZWE15z4pJGc4aeZoEJfeCMDBRGn%2FTnYUBEtLfMUu6jHC4dpTLTlqd%2BJowlpRd4tDU3pGyBTvRy3LqxbNSj6Aq%2FUzUXaVKLPuyUkduXY5Q3HhPOnkPd18%2FraLhW1SZ5W3lvRM9ZcgY8x%2BH8N5Z3eKFJ81cb25e0BeWSEQ6OesGfwjoLblkFLuf9KBqq6jJiCa2NYfK0pr7PtVNtIAftDh48EvmGxTBua2erFrGQ9BYgBTdOfhraxhNrn%2FhxFsTpwIlgO9z9BNCv5fb%2FJYL0jeKzD1%2Fs0Fj%2BtXpNy6KfaKTUXRH%2B60Cr668FTpWJ%2FjW9bio7ScMokbMi3QMGkO035gkDrdasjR7C8Pvv6ecgeKOdiISW0pLHXVwNeZrbFHYrNOsF1NAuSV%2BYrxP5OSEImMx%2FKdHGWs6wSzwnI0dQOsFGANfvAFNSql4d37Q0H3CQk%2B5TKAjNJaAuGKz2Bns7oEP4ItQZ0m9Vng7Qq6boDLVt2rwvp9oZfTWTCq3EXqH3W6ZBfeCBLBoJy3wWBVouIlrcgKP0HnsopIco4BS6RXUxKTDEmtXJBjqkAZezRSkxhX7arxMQD%2BO59CATykYs01oe5ZOLFb6fxCfihDcVvZKGQS7R7dzP%2BS%2FwNS4lPFNS9rrc%2BDJbUuRuf3ptE%2BMOLfGPP6rFq1DFt97%2Bw5swNkKRXc3%2FscW0eWjCNHm%2B%2FyRFOao1il4UvxdbjTeqac5BZVFnXdzQRBpDy0Sk3rbYWRSCUyvXKgN0BpLPyUHvfpFCXzFFCDfH9xltt6qMlAop&X-Amz-Signature=da0fe1f6be0445745515c4839d29f299c61fc1bafa4aff73fea859f714576ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSJT7E2Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T122526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi8I1teBeZ2qE1c0qHuz%2BhorndO4mX9%2BiY8DBzyuYN%2FAIhAOhN1iuk5HXz%2FYIetG3MucKX2VbfULk8D84ygh952cwvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz15pE6FKvyhNo1iv0q3APZ8%2FXeX40GwOJijfhLHdxK3kibjqC0f6byzK6BggXC6GWxZejgNbmfN%2BUrG1GYKoHj5w%2FRZfwnBVDGtKZWE15z4pJGc4aeZoEJfeCMDBRGn%2FTnYUBEtLfMUu6jHC4dpTLTlqd%2BJowlpRd4tDU3pGyBTvRy3LqxbNSj6Aq%2FUzUXaVKLPuyUkduXY5Q3HhPOnkPd18%2FraLhW1SZ5W3lvRM9ZcgY8x%2BH8N5Z3eKFJ81cb25e0BeWSEQ6OesGfwjoLblkFLuf9KBqq6jJiCa2NYfK0pr7PtVNtIAftDh48EvmGxTBua2erFrGQ9BYgBTdOfhraxhNrn%2FhxFsTpwIlgO9z9BNCv5fb%2FJYL0jeKzD1%2Fs0Fj%2BtXpNy6KfaKTUXRH%2B60Cr668FTpWJ%2FjW9bio7ScMokbMi3QMGkO035gkDrdasjR7C8Pvv6ecgeKOdiISW0pLHXVwNeZrbFHYrNOsF1NAuSV%2BYrxP5OSEImMx%2FKdHGWs6wSzwnI0dQOsFGANfvAFNSql4d37Q0H3CQk%2B5TKAjNJaAuGKz2Bns7oEP4ItQZ0m9Vng7Qq6boDLVt2rwvp9oZfTWTCq3EXqH3W6ZBfeCBLBoJy3wWBVouIlrcgKP0HnsopIco4BS6RXUxKTDEmtXJBjqkAZezRSkxhX7arxMQD%2BO59CATykYs01oe5ZOLFb6fxCfihDcVvZKGQS7R7dzP%2BS%2FwNS4lPFNS9rrc%2BDJbUuRuf3ptE%2BMOLfGPP6rFq1DFt97%2Bw5swNkKRXc3%2FscW0eWjCNHm%2B%2FyRFOao1il4UvxdbjTeqac5BZVFnXdzQRBpDy0Sk3rbYWRSCUyvXKgN0BpLPyUHvfpFCXzFFCDfH9xltt6qMlAop&X-Amz-Signature=340d7b97c86d5369085f793e764977230826b1ed4ee6cc5983e5dd786f0b09a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

