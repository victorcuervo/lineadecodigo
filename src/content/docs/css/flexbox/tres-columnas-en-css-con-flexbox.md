---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3JOZYA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM07l1kz0F%2BW3vaQGf83xpdMJWqMGOMJ922WlGHJW7xQIgBEoyJOoq%2FXd6hqy2Bn99yroS6zXzrb2g3UJf%2F63KzG8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2ByCmxfOJ09R3FjHCrcA%2FL9c4J30BR3bhbv5ZsX8QV8WBXOOtg%2FgG5O6bKIp2CdGQlzsVLRswmh78Z0G5EfbwZ%2FG%2Fg7t47vdpeh6OkJmUS8S8P7VPR5dq25pouE6nLsbtD%2FAg6ttKbvYZKIiE0AQifwFSU3A2L54tZEjEGRO2B2UGTvPoJkYefvtVfGDgTgHeYLNNViRjXdLZwNy3i%2FMJXJWuFv1rzebX0wJb9aB4z%2BKriRVGUSgk84ZUu%2FLPv%2BWbQLrML1yPvynpojTO6BVzhYWtX2KpMiVJI4s6L3c3dcjDyDgxmASASSPR7OwuNta0%2F%2F4zPBT6R2G4ZReOdqDyKKRBjNnX%2FZIItbTVJ5aVENslA3sXheKYX9dBCZNGN5e0t544Ea%2FRznaCatA1GyTqPGTC4GGQcUirnvWkP544Wk0u7TL3kxn5K2scilT%2BtpgrXVyLc9%2BdN4Na6wZ2jKmuJaRrd8wqNSmAOxg7NpmLj%2FaxtKFUSSa2cU2cTpEl761t8Yn4vUVHukP4tHBA8iMlVp0zFkUtuOItbBbgjS%2FKy8HIqQRQot5hinMCsE91ewbRbfWH%2BfM9sNOSH2DSLESg9uOf3OhDFPGL9djooCIfiKUfBMper8y87ngoX593tOmTRzKoYKm%2Fw5o%2B2EMLu03MkGOqUBiQ7qCGRyIAaJrQATa5M%2F1r8F8Q2Z9t26xJEtlWD9sWJKkBsNJL2ktpSW3e8Jedsv0Duw0MVdilZqhRB2Sms%2BQ8Q2p%2FYvxgmERv0UKprQ5EHbCj6h8U6%2FP7p9syY47kH5LJNf446j8DGwoPEG5k7jCrE191pQ%2BWPTsEQCnfRyPaTbiBlC1mptuaBjzgy2QmCr7M7Jt%2BC6ezlDp9HBBrI4c0ETVCa2&X-Amz-Signature=9521749cb09f2548f6a45c6c5441cbf1018cdb1b1522a2c31bff3f90119e2beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3JOZYA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM07l1kz0F%2BW3vaQGf83xpdMJWqMGOMJ922WlGHJW7xQIgBEoyJOoq%2FXd6hqy2Bn99yroS6zXzrb2g3UJf%2F63KzG8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2ByCmxfOJ09R3FjHCrcA%2FL9c4J30BR3bhbv5ZsX8QV8WBXOOtg%2FgG5O6bKIp2CdGQlzsVLRswmh78Z0G5EfbwZ%2FG%2Fg7t47vdpeh6OkJmUS8S8P7VPR5dq25pouE6nLsbtD%2FAg6ttKbvYZKIiE0AQifwFSU3A2L54tZEjEGRO2B2UGTvPoJkYefvtVfGDgTgHeYLNNViRjXdLZwNy3i%2FMJXJWuFv1rzebX0wJb9aB4z%2BKriRVGUSgk84ZUu%2FLPv%2BWbQLrML1yPvynpojTO6BVzhYWtX2KpMiVJI4s6L3c3dcjDyDgxmASASSPR7OwuNta0%2F%2F4zPBT6R2G4ZReOdqDyKKRBjNnX%2FZIItbTVJ5aVENslA3sXheKYX9dBCZNGN5e0t544Ea%2FRznaCatA1GyTqPGTC4GGQcUirnvWkP544Wk0u7TL3kxn5K2scilT%2BtpgrXVyLc9%2BdN4Na6wZ2jKmuJaRrd8wqNSmAOxg7NpmLj%2FaxtKFUSSa2cU2cTpEl761t8Yn4vUVHukP4tHBA8iMlVp0zFkUtuOItbBbgjS%2FKy8HIqQRQot5hinMCsE91ewbRbfWH%2BfM9sNOSH2DSLESg9uOf3OhDFPGL9djooCIfiKUfBMper8y87ngoX593tOmTRzKoYKm%2Fw5o%2B2EMLu03MkGOqUBiQ7qCGRyIAaJrQATa5M%2F1r8F8Q2Z9t26xJEtlWD9sWJKkBsNJL2ktpSW3e8Jedsv0Duw0MVdilZqhRB2Sms%2BQ8Q2p%2FYvxgmERv0UKprQ5EHbCj6h8U6%2FP7p9syY47kH5LJNf446j8DGwoPEG5k7jCrE191pQ%2BWPTsEQCnfRyPaTbiBlC1mptuaBjzgy2QmCr7M7Jt%2BC6ezlDp9HBBrI4c0ETVCa2&X-Amz-Signature=ce75a4873fe807839475e96ff454b74e1b117a6a4096fdeeadc43d1b7d4aafc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

