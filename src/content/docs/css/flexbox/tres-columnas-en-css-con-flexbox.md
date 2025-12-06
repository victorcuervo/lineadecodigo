---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXIDAFO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoCLS9Ruhzn5UfZHqsG86XWOBbF%2F%2BGUnDoJ4EkIhMmLgIgPWohlVYV5h4Ab4DDwpJXgdGaZBWjwZ3LUJgiBtyKPdwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDP2REHcHIKI24aZkrSrcA6ZeWKYGIE5Hwc%2FpRXgNlRcNS28IHHaViXO4YaRYi0mMbeGXZ2Aro5oN6yeXWTu2efFEadD4iPf50BeSkodGW2Uq5Vae0usQypDCRjQouZrShrIARJLhyUO0gb1JvwCoaAJACUmhJZtJ5M4iWrjZoqOhRf8dgbpUg46r4NhSF6rv446nVXMmz1GNWtD2MgxLNN0BU3I6yaF%2F%2BeiN0AOO7V70ETIMtAZgCIEGDr0YCxcmUyM%2BKwHjaZy%2FIQG9eMa4SwzVLNOVlEUmQzMzQdJPtm5gAb%2B4b84GU%2FV5kPeU8kFhS%2Fp4CiIsxKTOyROAwCIH%2F7u8iakQ9QcGDIQgnhCZew%2B0vN2m%2BsFpPQshcJLaCDxMJB5t27bkRT4aNnmkafj6MS4fANXYQGvtAVF3elpvGJPtoGakk7%2B0LFsXl%2FVb%2FpUe8DxwSQd9Ks7iXS1T0GoluVlnIRpl4y9qZTqb2XP7ic6Om0ECKa9aMGswxB%2Fo6d4lzg4SLUYfnH9BVW%2FXyfvloG5j7n6%2ByEjStM491AmzzPILxQYfGcxa8Qf05w3p4CN41A8h4ikiJDOka4EBz5fjFacOEGeWeUihVVwrvVGua7mx4X14stYUkbWDkY8O3bn6Uw7T%2FrfACvXAZDwEMPa8z8kGOqUBtoDWSw1laREI0dDMumgzvf%2Byo%2FeZzPsJ4wjaDC30%2B%2Fxz1mN1N0%2BCL0SSZbiSHxC2AxiyAPaf3rpWm4M%2FanL2UvUPqQxbvdA2V0EYRd1k2VDhJo75NoKwjQdWW2sTBRGhdWNoKiNZjIikX01u9Frth0zjZqpyPsldVU8%2F3ltuwYbW2rPmRZl8OzEsjfsjqkmQXgJLV69YgIUitzmuC33L5CZR3TNs&X-Amz-Signature=5521bfe3407d5ec1054384bed4e057db60a303e17fb80e24423d6575f54b577b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXIDAFO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoCLS9Ruhzn5UfZHqsG86XWOBbF%2F%2BGUnDoJ4EkIhMmLgIgPWohlVYV5h4Ab4DDwpJXgdGaZBWjwZ3LUJgiBtyKPdwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDP2REHcHIKI24aZkrSrcA6ZeWKYGIE5Hwc%2FpRXgNlRcNS28IHHaViXO4YaRYi0mMbeGXZ2Aro5oN6yeXWTu2efFEadD4iPf50BeSkodGW2Uq5Vae0usQypDCRjQouZrShrIARJLhyUO0gb1JvwCoaAJACUmhJZtJ5M4iWrjZoqOhRf8dgbpUg46r4NhSF6rv446nVXMmz1GNWtD2MgxLNN0BU3I6yaF%2F%2BeiN0AOO7V70ETIMtAZgCIEGDr0YCxcmUyM%2BKwHjaZy%2FIQG9eMa4SwzVLNOVlEUmQzMzQdJPtm5gAb%2B4b84GU%2FV5kPeU8kFhS%2Fp4CiIsxKTOyROAwCIH%2F7u8iakQ9QcGDIQgnhCZew%2B0vN2m%2BsFpPQshcJLaCDxMJB5t27bkRT4aNnmkafj6MS4fANXYQGvtAVF3elpvGJPtoGakk7%2B0LFsXl%2FVb%2FpUe8DxwSQd9Ks7iXS1T0GoluVlnIRpl4y9qZTqb2XP7ic6Om0ECKa9aMGswxB%2Fo6d4lzg4SLUYfnH9BVW%2FXyfvloG5j7n6%2ByEjStM491AmzzPILxQYfGcxa8Qf05w3p4CN41A8h4ikiJDOka4EBz5fjFacOEGeWeUihVVwrvVGua7mx4X14stYUkbWDkY8O3bn6Uw7T%2FrfACvXAZDwEMPa8z8kGOqUBtoDWSw1laREI0dDMumgzvf%2Byo%2FeZzPsJ4wjaDC30%2B%2Fxz1mN1N0%2BCL0SSZbiSHxC2AxiyAPaf3rpWm4M%2FanL2UvUPqQxbvdA2V0EYRd1k2VDhJo75NoKwjQdWW2sTBRGhdWNoKiNZjIikX01u9Frth0zjZqpyPsldVU8%2F3ltuwYbW2rPmRZl8OzEsjfsjqkmQXgJLV69YgIUitzmuC33L5CZR3TNs&X-Amz-Signature=29b93a22fb8da216026aba607661968d38e211cb12deb4c26f17bfacf63a824a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

