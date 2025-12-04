---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZC4MQ4X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB7qYZ9sWUFq65chc2qi9sro7SjF8sN%2BRZ84NVERskeIAiAuZ1NTHRV6l1O1ns22tslUIl%2Fz94FWAx31ixzeR29bZir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM8FpEm7V6CMhZQOfKKtwD1slMGbsUg7BrmBt%2FBRly164DXGMuZbFF0c%2FZuimTWEj%2BzNwqsEv9oKVpSajAN1f65UN%2FNxvshMYkE1WyfG3suYnPGfx2sCcrT0XikxTemgYTJ0RZhLS3o%2FxoDc78%2F%2BVL9k%2B12qiGB3PMRdl%2F%2F%2Fm%2B6mP9vJficbSzDEBZDQlEZ%2BkGRhvJZgcec0rT9Zz6x1ueGWhJBEYdLuzYjq0OT1mb7UnWnBRA0eUeZC0zqenoQ7RhgGWO%2BynvebC%2FjOYjX7A93TBZcKwvvaJq1Ai7qdRtOxRVJbleIw5bYayfugJ3SrQRdEsFdgqg9ExbOvd6yQxg3g7a882MvJfVsmjNNKvcZPWtSsFAsksaT0umW%2BZ1kIUAZJiQtvSnd8beg0Vdjmy8ClOF%2BzLr5F8%2BoFJ67oYWlzt4LhPTbcIds2%2BU1Ni3lehSuxaRYNvH3RZJlbyjSy9D%2BzzZCXe3el9yLNV36MyVx%2BoRFbFiBf9k%2FtQVxLDGwCP%2FqvV7%2FDov%2BC4c4wuq4PVjRyGnWZphyWGNtGwjU2KCskrBfKk8jhN%2F%2B8WqlfxH7%2FYMSoum3oWMszP4l9LtBOAtEH3rXLs5Lci%2BFArgNdmLCxcgd4cQ%2BbU6jxLkmHQ3qAfC%2F1Pa1wwcoxhK2AQw%2BtTDyQY6pgFd5nwiFA9RUMDYAxQnmAYrktPf5f8DuezErmJ1%2B25K6VDnFxurXHiC95bFVR1UObhhSDkHaud2UmfzsCodEddU9z7DmRNX4jFzsHqjlWLjTbUhVFSeN3%2BxODvqF7RUXhhDv4u14ugJT%2BHya8P2vgWNj3nHvv%2BwAR0aXcGqCTZh7ZROAk3RmNm5YO%2F1fGmXScsPeE9fffsVYKPMW37KAe0BL4MWe2%2F7&X-Amz-Signature=7eee23cd3e66ebe86f8f2f61d0db6bcbbf56a83e2ac194b06b32c7418c1b0c7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZC4MQ4X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB7qYZ9sWUFq65chc2qi9sro7SjF8sN%2BRZ84NVERskeIAiAuZ1NTHRV6l1O1ns22tslUIl%2Fz94FWAx31ixzeR29bZir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM8FpEm7V6CMhZQOfKKtwD1slMGbsUg7BrmBt%2FBRly164DXGMuZbFF0c%2FZuimTWEj%2BzNwqsEv9oKVpSajAN1f65UN%2FNxvshMYkE1WyfG3suYnPGfx2sCcrT0XikxTemgYTJ0RZhLS3o%2FxoDc78%2F%2BVL9k%2B12qiGB3PMRdl%2F%2F%2Fm%2B6mP9vJficbSzDEBZDQlEZ%2BkGRhvJZgcec0rT9Zz6x1ueGWhJBEYdLuzYjq0OT1mb7UnWnBRA0eUeZC0zqenoQ7RhgGWO%2BynvebC%2FjOYjX7A93TBZcKwvvaJq1Ai7qdRtOxRVJbleIw5bYayfugJ3SrQRdEsFdgqg9ExbOvd6yQxg3g7a882MvJfVsmjNNKvcZPWtSsFAsksaT0umW%2BZ1kIUAZJiQtvSnd8beg0Vdjmy8ClOF%2BzLr5F8%2BoFJ67oYWlzt4LhPTbcIds2%2BU1Ni3lehSuxaRYNvH3RZJlbyjSy9D%2BzzZCXe3el9yLNV36MyVx%2BoRFbFiBf9k%2FtQVxLDGwCP%2FqvV7%2FDov%2BC4c4wuq4PVjRyGnWZphyWGNtGwjU2KCskrBfKk8jhN%2F%2B8WqlfxH7%2FYMSoum3oWMszP4l9LtBOAtEH3rXLs5Lci%2BFArgNdmLCxcgd4cQ%2BbU6jxLkmHQ3qAfC%2F1Pa1wwcoxhK2AQw%2BtTDyQY6pgFd5nwiFA9RUMDYAxQnmAYrktPf5f8DuezErmJ1%2B25K6VDnFxurXHiC95bFVR1UObhhSDkHaud2UmfzsCodEddU9z7DmRNX4jFzsHqjlWLjTbUhVFSeN3%2BxODvqF7RUXhhDv4u14ugJT%2BHya8P2vgWNj3nHvv%2BwAR0aXcGqCTZh7ZROAk3RmNm5YO%2F1fGmXScsPeE9fffsVYKPMW37KAe0BL4MWe2%2F7&X-Amz-Signature=63ebae89abc66ce9f4b2c9dd31976cf02f808d1b300dabe15f4e0d05e20c282a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

