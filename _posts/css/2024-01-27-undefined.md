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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BPSBA4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCICC0eCQY5d1tzto%2B9NUTVftHG%2FoWOU698kAisw5%2BmAk2AiEAh5CNOlThM3%2FDZd45lNWoRxJxCMpdrZ1dRm%2BbXu0QlR0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNpFQ%2FhKjmMHg0%2BoAircAwr2q6Lw7HslsiEAuckKOhj%2FH%2FEkKPz6MzkdTNiPgbn7Q0koqwG9jRxfvh%2Bp7P6w9rm7Pp402%2Fo73Fha2mhUvHgQEz8cC8o9OELATepUspkkPfNohVdszNlTZThjYe1%2FPjAJUHiRj2oALrB%2BR8CedoPcrF%2BQVdD4G9AOqDezXUwLMW3IAz38Jd3yD46eVEZfDU0GbOrxr%2BUqfhic1hrCQ7VrQQnKUAnaU7Q%2BNqdmoe0HsCs9CFTveZM%2BA5S2pIfNWQ%2F22VrtKiAqMjZzTROrJZzDrEBUPGx8cEAl3PAn9E%2FYYY2FHpW64w2svqAPcTmQRG7FDpCwwynKlQLdmbDE5wErwbe7DMqwp7PT%2B%2FXdaZQ7FohG4tUDpjd3mw6L7NRm8zX8baJ3tWOEaNAYrFJmb2HCFqQb9IFk8Mjfz89nq2ZTkLiWXkEZ%2FviKid1nHsVEK0mBbD3pTan8yC8USQyZLtVUYpHML94rCcMhW8%2BhnWsZtNwXBb5rKetwX8CWkwlS%2BwdvExCrhvov5D2FrYGI0AuFkCuilHhmXyG0Ljx7AA4lNxiqUt39h5Z4WVQCNFNxBmbVTxVXrzPfqfG2G3LTnCFlCYooH52iEVwXzmO0ybqOi0PMoKp1NspFHJurMLzVv8kGOqUBZ9KGUGzUqmKzOIxI1sdXWZ%2Bn9wHVCAvZXk83s9%2FSwIkMgfHmUjGhJweLc0yaxRigSAi8du3JOjN3uMAaJQutmTnE6LObOeXeA5S1%2FwN954GRn178%2BqVueblXGTYYtkLQ8n5%2Bw5R1z3F7LiUuy0J9%2FU%2BT%2Bh8j3UNwPDXNtJ8Rmsh%2BSaNa%2BYJkfsb8vuFrPaNWPzyruQASj4ZNnhhCAZOExlSLu2S2&X-Amz-Signature=0e2d4ec19fc549e2e1b8d2ca3459d412e792290f966b88ca3b52554f87e5b591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BPSBA4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCICC0eCQY5d1tzto%2B9NUTVftHG%2FoWOU698kAisw5%2BmAk2AiEAh5CNOlThM3%2FDZd45lNWoRxJxCMpdrZ1dRm%2BbXu0QlR0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNpFQ%2FhKjmMHg0%2BoAircAwr2q6Lw7HslsiEAuckKOhj%2FH%2FEkKPz6MzkdTNiPgbn7Q0koqwG9jRxfvh%2Bp7P6w9rm7Pp402%2Fo73Fha2mhUvHgQEz8cC8o9OELATepUspkkPfNohVdszNlTZThjYe1%2FPjAJUHiRj2oALrB%2BR8CedoPcrF%2BQVdD4G9AOqDezXUwLMW3IAz38Jd3yD46eVEZfDU0GbOrxr%2BUqfhic1hrCQ7VrQQnKUAnaU7Q%2BNqdmoe0HsCs9CFTveZM%2BA5S2pIfNWQ%2F22VrtKiAqMjZzTROrJZzDrEBUPGx8cEAl3PAn9E%2FYYY2FHpW64w2svqAPcTmQRG7FDpCwwynKlQLdmbDE5wErwbe7DMqwp7PT%2B%2FXdaZQ7FohG4tUDpjd3mw6L7NRm8zX8baJ3tWOEaNAYrFJmb2HCFqQb9IFk8Mjfz89nq2ZTkLiWXkEZ%2FviKid1nHsVEK0mBbD3pTan8yC8USQyZLtVUYpHML94rCcMhW8%2BhnWsZtNwXBb5rKetwX8CWkwlS%2BwdvExCrhvov5D2FrYGI0AuFkCuilHhmXyG0Ljx7AA4lNxiqUt39h5Z4WVQCNFNxBmbVTxVXrzPfqfG2G3LTnCFlCYooH52iEVwXzmO0ybqOi0PMoKp1NspFHJurMLzVv8kGOqUBZ9KGUGzUqmKzOIxI1sdXWZ%2Bn9wHVCAvZXk83s9%2FSwIkMgfHmUjGhJweLc0yaxRigSAi8du3JOjN3uMAaJQutmTnE6LObOeXeA5S1%2FwN954GRn178%2BqVueblXGTYYtkLQ8n5%2Bw5R1z3F7LiUuy0J9%2FU%2BT%2Bh8j3UNwPDXNtJ8Rmsh%2BSaNa%2BYJkfsb8vuFrPaNWPzyruQASj4ZNnhhCAZOExlSLu2S2&X-Amz-Signature=a2545d142e117bf8597833820fea2d4952623248dba982abd4f9e1d0be8572e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

