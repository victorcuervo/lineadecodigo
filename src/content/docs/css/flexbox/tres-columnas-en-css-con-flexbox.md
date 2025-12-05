---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UETPTIR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlNfNw9%2FNc%2Bh2%2BLrXbwlSERo62%2BDjhlp8c3nmuusQ31AIhAK6pSqTB0NmaEE4rAjRMzXDgxkVKBcOVwYRH2QtFsuYIKv8DCGcQABoMNjM3NDIzMTgzODA1IgyTE4tknK7%2B4dWGpbkq3AOHgz2b3rr5OyDpkb%2FGhSI0r2Mhs6veWBfo7m9NWBWIgmcMh3aHWJozCxt9QUsBkYkl53ekIbUhHI1tCijN%2BiVUzUf0qmP%2B9%2F07ZQD9bQlEPR%2FJPCvP%2BEpMCdYYxlX7JPRBnjJGmIMRD2bvD5%2FhnOWMyCTkzuzaLXBkDGO3pdtYDviWVfAed66kcAMh%2ByYSy7jkWtBCZ8UJr76MReLQ9Be9aKDeuW0hR4hSWoO%2FRDTQI4alQn3OaZfZuHPx7RhlsG4YRGZRbTJXA7Iv9DLAv%2BOkNArHXY4eq1g6V43hCML72wLlHeSgN8WmZu9ZD7m5xk0zAModr9fcG0c0WTteikBldJm%2BHxfSbEMu3bvstZxZbq6elpA4NYkYvQhpVET1%2BHVoIZ8G3tEW3PdZgRcSb59k5V%2FV0Sbio%2B5jtr8Bs9Ojbm71ms2ZEmQ2FUbWWNXmy%2BSK88w872f5fhygWc1vfO76pL%2FE3g2MMaZS8368rMcsDvOC5Y0mRBcV9kjAdstgEEW6sGIrBQw03z2j7hIenZHLBHneJdwK7GRKhYLTAOGO7yuqn0tcC0%2FgPnUnsvuMkVCYZRpAfFDf1%2FrQbav2WOsX7nGxORxg8YuCOXy6g%2FWI9NIPuQitM06Czrh6XTCJm83JBjqkAch4ZsfF40jmScOc29vvX4loEx6HsrFD41hU0b3Qq3KnArpC2RYrKfG8h%2BZvT9Mu%2F6FGbJz42Q3%2BVYsGCY06%2B3SLYGz9VqFZ%2FFMHCaiDH1MEwGDdWmeTNtcj6ioP%2FKyfZ%2BTTDA83sjvTQFtse%2BsByebUjqJfJVWNXxDb40mbIbY0zK5UpI%2FJaPzFt7aCenIDrF%2BIWE6XWnZWKO8y0vnN3OilD03R&X-Amz-Signature=0102c9560d2ba0dd2d509fbefc255408fcc203b1d1d4fe4d85631cbda9b7464c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UETPTIR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlNfNw9%2FNc%2Bh2%2BLrXbwlSERo62%2BDjhlp8c3nmuusQ31AIhAK6pSqTB0NmaEE4rAjRMzXDgxkVKBcOVwYRH2QtFsuYIKv8DCGcQABoMNjM3NDIzMTgzODA1IgyTE4tknK7%2B4dWGpbkq3AOHgz2b3rr5OyDpkb%2FGhSI0r2Mhs6veWBfo7m9NWBWIgmcMh3aHWJozCxt9QUsBkYkl53ekIbUhHI1tCijN%2BiVUzUf0qmP%2B9%2F07ZQD9bQlEPR%2FJPCvP%2BEpMCdYYxlX7JPRBnjJGmIMRD2bvD5%2FhnOWMyCTkzuzaLXBkDGO3pdtYDviWVfAed66kcAMh%2ByYSy7jkWtBCZ8UJr76MReLQ9Be9aKDeuW0hR4hSWoO%2FRDTQI4alQn3OaZfZuHPx7RhlsG4YRGZRbTJXA7Iv9DLAv%2BOkNArHXY4eq1g6V43hCML72wLlHeSgN8WmZu9ZD7m5xk0zAModr9fcG0c0WTteikBldJm%2BHxfSbEMu3bvstZxZbq6elpA4NYkYvQhpVET1%2BHVoIZ8G3tEW3PdZgRcSb59k5V%2FV0Sbio%2B5jtr8Bs9Ojbm71ms2ZEmQ2FUbWWNXmy%2BSK88w872f5fhygWc1vfO76pL%2FE3g2MMaZS8368rMcsDvOC5Y0mRBcV9kjAdstgEEW6sGIrBQw03z2j7hIenZHLBHneJdwK7GRKhYLTAOGO7yuqn0tcC0%2FgPnUnsvuMkVCYZRpAfFDf1%2FrQbav2WOsX7nGxORxg8YuCOXy6g%2FWI9NIPuQitM06Czrh6XTCJm83JBjqkAch4ZsfF40jmScOc29vvX4loEx6HsrFD41hU0b3Qq3KnArpC2RYrKfG8h%2BZvT9Mu%2F6FGbJz42Q3%2BVYsGCY06%2B3SLYGz9VqFZ%2FFMHCaiDH1MEwGDdWmeTNtcj6ioP%2FKyfZ%2BTTDA83sjvTQFtse%2BsByebUjqJfJVWNXxDb40mbIbY0zK5UpI%2FJaPzFt7aCenIDrF%2BIWE6XWnZWKO8y0vnN3OilD03R&X-Amz-Signature=dbe4748c5fc5e1c7b3f2896ef1db1ce986473e68d41ff4f9c6336725db58794d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

