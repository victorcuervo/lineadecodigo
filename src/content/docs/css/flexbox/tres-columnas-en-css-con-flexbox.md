---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5SYGVT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCbGVoFV99HwIYTBgrgMgLvrlwMyvNVpCUCbVDKrV%2FUTgIgH77sKnXgBiq8dlljCAWwJt%2BLAItnSqrrO5abO9MJHKgq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKYhxR2IDiHpFQRLmCrcA0vXc%2BsbfKx43ucpyqcWJzWob9ccCO%2F4PRwQSfKvFBJmqquyXMyrY18MzbDXAN5OjAgG4by6Al%2BpIIX7pCRnlcEqjPUINCBhPq5S7WQzQidKv44QaAJum0lIelI%2FjZHEsdQoTqcfWhVAoUKBzAx4RMAoGpijZq8R3fv9E1qgSyUoSg%2F%2F%2B23pTnWRGd2zV2R%2F7GVPiOxQbXBwh1Vk%2Fy52vSxb4JiGnH6p6bubHupVMtMyBaGWltbvXlNv6lrv5WOGEgYMszojYibl6gZ9XOJdHz6jS7jnbsMIXXX4jRJiFQ7CETf3gQ6omAAINpbsq8B3%2F7M98qZIWSQG0DjVV8uYL5arxBl70rbVFNVrdO%2FYog2JLbq096K1ykKzdqOCfePpMELF9vI%2Bs%2BKSeIqMRyyawSHez6%2FrXc9cjasD%2BPSalc2c2WLsNCrtVBRoxfrTjShGCq0uCYduN%2B%2B8DwY82RS6TIdWPiBJ8UWDxaBDods%2FT2Yeibc%2F15AjvvA34kEvAmXb7II0aZo%2FPYX0VLXm%2FgSUY8O5QN9eVTDCwcKS3c820Z8OjHqXbJP%2FXryenmKaU9n%2FBFm%2B2L6FZI8tbyd%2BLCoOOcXt%2Fiqwo%2FwIvihovXSrJaytY12Y3SBBZuzGpeWxMMagxskGOqUBBBnBbj4nNYkxNNpCrOPd8XswNaWHMjlpLesj05skA%2F%2BISJk5T86sl7nocY5DFz3GB6ueJiGcnCL8ip0PJy5k%2FnMRF0qRlcA6%2BMhoWxJJi9wWJPGyDcMmiPydgXiq1K6Yzm0Nl03Y3p6X%2BycuQdFQfHEgP%2FIe64q52YYHywPMj3MiW3uzZQhSHOItP5fIeEB02Nt5nrB2nHhhs2okeU2EFTUbG1sp&X-Amz-Signature=dd06d22e089c4e67ec10df5f2b699dcfeb4ed4fe42c7d3e5e9ce63f777c03ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5SYGVT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCbGVoFV99HwIYTBgrgMgLvrlwMyvNVpCUCbVDKrV%2FUTgIgH77sKnXgBiq8dlljCAWwJt%2BLAItnSqrrO5abO9MJHKgq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKYhxR2IDiHpFQRLmCrcA0vXc%2BsbfKx43ucpyqcWJzWob9ccCO%2F4PRwQSfKvFBJmqquyXMyrY18MzbDXAN5OjAgG4by6Al%2BpIIX7pCRnlcEqjPUINCBhPq5S7WQzQidKv44QaAJum0lIelI%2FjZHEsdQoTqcfWhVAoUKBzAx4RMAoGpijZq8R3fv9E1qgSyUoSg%2F%2F%2B23pTnWRGd2zV2R%2F7GVPiOxQbXBwh1Vk%2Fy52vSxb4JiGnH6p6bubHupVMtMyBaGWltbvXlNv6lrv5WOGEgYMszojYibl6gZ9XOJdHz6jS7jnbsMIXXX4jRJiFQ7CETf3gQ6omAAINpbsq8B3%2F7M98qZIWSQG0DjVV8uYL5arxBl70rbVFNVrdO%2FYog2JLbq096K1ykKzdqOCfePpMELF9vI%2Bs%2BKSeIqMRyyawSHez6%2FrXc9cjasD%2BPSalc2c2WLsNCrtVBRoxfrTjShGCq0uCYduN%2B%2B8DwY82RS6TIdWPiBJ8UWDxaBDods%2FT2Yeibc%2F15AjvvA34kEvAmXb7II0aZo%2FPYX0VLXm%2FgSUY8O5QN9eVTDCwcKS3c820Z8OjHqXbJP%2FXryenmKaU9n%2FBFm%2B2L6FZI8tbyd%2BLCoOOcXt%2Fiqwo%2FwIvihovXSrJaytY12Y3SBBZuzGpeWxMMagxskGOqUBBBnBbj4nNYkxNNpCrOPd8XswNaWHMjlpLesj05skA%2F%2BISJk5T86sl7nocY5DFz3GB6ueJiGcnCL8ip0PJy5k%2FnMRF0qRlcA6%2BMhoWxJJi9wWJPGyDcMmiPydgXiq1K6Yzm0Nl03Y3p6X%2BycuQdFQfHEgP%2FIe64q52YYHywPMj3MiW3uzZQhSHOItP5fIeEB02Nt5nrB2nHhhs2okeU2EFTUbG1sp&X-Amz-Signature=e2602a63df91cc0fbbcb223c026f8659c4c630ff71a8c6b883009522df386f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

