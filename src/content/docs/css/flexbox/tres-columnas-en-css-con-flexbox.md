---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRKYKGIV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVFoprDrHPTTXO3%2FbMyssZ7kj8cCLKT4Vd1%2By03lxuyAiEA9mK%2BRRO3EWgt9deugbwxxAgVGFAQJ%2BSyTNZyrM4YlxIqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEj1SuBjBjfCy0hrASrcAwy6LwyVDJQi%2FtnUKy88Hl2xmJhVmSF03OxXiGx7oNJK0vsED60Y0QBMj1IOVHs5wXkKPjvQVQs3oDoS9rFYo47h6siH5YTB4f90TGdoYRvbOQ2Mbfiq%2F0J%2F%2B2Fg5zhGINy9GURHLSqfNwroM5bM4G4%2FJVZLnqEf4NxFqLAWo73YsReQ5Fdr0mF%2BBdVJXwtdu2SeLkYWtyfQSpxpWh6d4e%2Fuk6agljLnM8A%2B%2FwYAVnMHelzYbT6LDaB5jGvVVogc6SqL%2FwB4wMg6cwSN9opNSf0cWUT9tdD0BI4rvbDvPimYW2Nq%2BrpAuh0RTDWEVkjSHnUNYpArWfq7pPy3c9mrgh8PbpKE2tUMrBzawDUl5kA4Ujegnti3XcPbsM9NNHdbY%2BYV%2BfAIenc9WV6QUoxJNEWhgjuMUS4nYbrhKen4lnQgzpNvBuuUiqi5b%2BW4sXnxpudR2pIpEgiwDO1W5qtbK3f4BIBNxczQnPgqntEoWYxzAsi%2BlqlOwlCJNAB8blnHPb9%2BdCnP5N2x%2FM8kaYbiunPvIAQpfAi7dX%2FrCkSZKGSEPb%2BCV1pL3ne92c6vShIcucT%2FJ5WV5MbhLEojA8cicQ31u0NHeZQAN2NuWy9ihD05liTCACMLVBfysywzMMih3ckGOqUBP%2Fr6JwUaedh5OqMhntU3NBaLSIs%2F6X4IjzoshFG%2FENb62FeMohKSplWVIR8eo5QlS%2FDDR7S3NimVF4gg1NHTKZb9avlwlMGoL1OJusRbIG7lsQGLng6IVUb6Qfe7hLIKFVZ3WF0Z8tSj7aCYsqbjdFI%2BIobOVxkAMpC3%2FtES72l8qDxiD0rp7jQ7Z21HRGjBzf8UalG8aBmg%2BaW%2Bcicc8buuv3ic&X-Amz-Signature=efefba9e1f5e3562c8e1fd593dcd5c7574ef8d2c935d1e6a10d0f65a51e207de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRKYKGIV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVFoprDrHPTTXO3%2FbMyssZ7kj8cCLKT4Vd1%2By03lxuyAiEA9mK%2BRRO3EWgt9deugbwxxAgVGFAQJ%2BSyTNZyrM4YlxIqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEj1SuBjBjfCy0hrASrcAwy6LwyVDJQi%2FtnUKy88Hl2xmJhVmSF03OxXiGx7oNJK0vsED60Y0QBMj1IOVHs5wXkKPjvQVQs3oDoS9rFYo47h6siH5YTB4f90TGdoYRvbOQ2Mbfiq%2F0J%2F%2B2Fg5zhGINy9GURHLSqfNwroM5bM4G4%2FJVZLnqEf4NxFqLAWo73YsReQ5Fdr0mF%2BBdVJXwtdu2SeLkYWtyfQSpxpWh6d4e%2Fuk6agljLnM8A%2B%2FwYAVnMHelzYbT6LDaB5jGvVVogc6SqL%2FwB4wMg6cwSN9opNSf0cWUT9tdD0BI4rvbDvPimYW2Nq%2BrpAuh0RTDWEVkjSHnUNYpArWfq7pPy3c9mrgh8PbpKE2tUMrBzawDUl5kA4Ujegnti3XcPbsM9NNHdbY%2BYV%2BfAIenc9WV6QUoxJNEWhgjuMUS4nYbrhKen4lnQgzpNvBuuUiqi5b%2BW4sXnxpudR2pIpEgiwDO1W5qtbK3f4BIBNxczQnPgqntEoWYxzAsi%2BlqlOwlCJNAB8blnHPb9%2BdCnP5N2x%2FM8kaYbiunPvIAQpfAi7dX%2FrCkSZKGSEPb%2BCV1pL3ne92c6vShIcucT%2FJ5WV5MbhLEojA8cicQ31u0NHeZQAN2NuWy9ihD05liTCACMLVBfysywzMMih3ckGOqUBP%2Fr6JwUaedh5OqMhntU3NBaLSIs%2F6X4IjzoshFG%2FENb62FeMohKSplWVIR8eo5QlS%2FDDR7S3NimVF4gg1NHTKZb9avlwlMGoL1OJusRbIG7lsQGLng6IVUb6Qfe7hLIKFVZ3WF0Z8tSj7aCYsqbjdFI%2BIobOVxkAMpC3%2FtES72l8qDxiD0rp7jQ7Z21HRGjBzf8UalG8aBmg%2BaW%2Bcicc8buuv3ic&X-Amz-Signature=930517b8633e837f1b7a748f127b6e06d1bb0ce0a6e946bb52d6fd5e80f9743e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

