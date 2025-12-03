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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2HL5YJS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCMwWSGXLhvIhHuTUs4eqqurbOq32J1H8yMcwVwWKZeTAIhAJ2tyv2BtdCjZrOy%2FvgUBHodItF2pjmZ%2BLAhqnaR0rQbKv8DCCIQABoMNjM3NDIzMTgzODA1IgzlPSwOXB2bNc1Hy68q3ANRRvxb4zzzU%2F370mb5EiKwtlAQu012LV2SA2UZlqlXWH%2BPOh3ODTmEeraoEH5VCSDD%2BMhSk7HEMFtOZv4AoKy%2FE0sMSgoJf%2FQ5fwnQjHXBqJ%2BprM%2FeJtHVWDBMUIwHCrSbsURj1nMyXjrd0boYJNfqJOIiFA5Wb%2FY3mIil8ixhhHbB5POa36gqjhfTlioWZ4NZoqexVtQhTSJ2AeAMlwqVmyj3SF6o90DCsQOf5BXh1CyfS%2BEsANycZ68gmzdFiiJAdXy4UxJcUlbmh6mLEkaKIUYNSpRhgBkYXWwJTQAhXDjznSSGI6f9yuJnhXfjbHaMlvBqpX%2FFAKCjdfG4r35fIl%2Fwbwp3%2BYXVtsYy3dKdqpOz1bNvrXraJpBKzqvXswWKJvzQY1cYlYwpJAFHUA6FDWVe3Ryd%2B1%2BN1k%2Bfb7AOOWLSkTE4DsZvVjjpRuYbFTDJtuZfS4nWNbThpO8XKef%2BOCv27RY1YfV4LMFz%2BUMnPruV5yQuYmDAhpKIa5LQndV9lQqQov5jpy9EDFZJh5Ix9mBBq%2FUW9Ws3lbp4YbLu%2BYVvJbL87FvgoJgTTK%2FO4ZZGCNImdBUZSxSesPS184KEszksSjDDbs7rt%2FN58sgruKP2H41m79j3oza3%2BDDIl77JBjqkAR5ind41wGV%2FNqNX6owrXZyj6OPEyVEzrVi2xgW%2B7Q6NhJnl1zhFehoMmQ0FD%2BzQkfReftTW%2FV8X1Lsa2DOPm5ll5%2BGvbuC67glpjdCafgKf8VduQXpyGV1DN06Csq4Q%2BeRyS1olw7unoN%2Fv%2BQQNKJAuNZvoh4r6m%2BUNJzvasizEvs8D%2FaccUh1VjPJUMNq8omse4sZOT3bDaf4x%2BOPKgYBmBwGH&X-Amz-Signature=20bd2703b6edaa6ebfc1b9f36c3a46a848b55ace184f6bc8af3d2d0f8a25acac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2HL5YJS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCMwWSGXLhvIhHuTUs4eqqurbOq32J1H8yMcwVwWKZeTAIhAJ2tyv2BtdCjZrOy%2FvgUBHodItF2pjmZ%2BLAhqnaR0rQbKv8DCCIQABoMNjM3NDIzMTgzODA1IgzlPSwOXB2bNc1Hy68q3ANRRvxb4zzzU%2F370mb5EiKwtlAQu012LV2SA2UZlqlXWH%2BPOh3ODTmEeraoEH5VCSDD%2BMhSk7HEMFtOZv4AoKy%2FE0sMSgoJf%2FQ5fwnQjHXBqJ%2BprM%2FeJtHVWDBMUIwHCrSbsURj1nMyXjrd0boYJNfqJOIiFA5Wb%2FY3mIil8ixhhHbB5POa36gqjhfTlioWZ4NZoqexVtQhTSJ2AeAMlwqVmyj3SF6o90DCsQOf5BXh1CyfS%2BEsANycZ68gmzdFiiJAdXy4UxJcUlbmh6mLEkaKIUYNSpRhgBkYXWwJTQAhXDjznSSGI6f9yuJnhXfjbHaMlvBqpX%2FFAKCjdfG4r35fIl%2Fwbwp3%2BYXVtsYy3dKdqpOz1bNvrXraJpBKzqvXswWKJvzQY1cYlYwpJAFHUA6FDWVe3Ryd%2B1%2BN1k%2Bfb7AOOWLSkTE4DsZvVjjpRuYbFTDJtuZfS4nWNbThpO8XKef%2BOCv27RY1YfV4LMFz%2BUMnPruV5yQuYmDAhpKIa5LQndV9lQqQov5jpy9EDFZJh5Ix9mBBq%2FUW9Ws3lbp4YbLu%2BYVvJbL87FvgoJgTTK%2FO4ZZGCNImdBUZSxSesPS184KEszksSjDDbs7rt%2FN58sgruKP2H41m79j3oza3%2BDDIl77JBjqkAR5ind41wGV%2FNqNX6owrXZyj6OPEyVEzrVi2xgW%2B7Q6NhJnl1zhFehoMmQ0FD%2BzQkfReftTW%2FV8X1Lsa2DOPm5ll5%2BGvbuC67glpjdCafgKf8VduQXpyGV1DN06Csq4Q%2BeRyS1olw7unoN%2Fv%2BQQNKJAuNZvoh4r6m%2BUNJzvasizEvs8D%2FaccUh1VjPJUMNq8omse4sZOT3bDaf4x%2BOPKgYBmBwGH&X-Amz-Signature=d64413b40aed5e6b59939a653a0bb52d2dfb501fb653f86a9ebb76cf9ed4f8f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

