---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BHL7N2J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCnB4BL7x7P6jt%2FNZoRelNh8YjqZz2UJY1n64W7wlkF1wIgEr0dW3FOKXkmFs6mFr12Yduwi3%2BcYmg9AlSBd6k%2FBC8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJQlz74wdVqiCu7dHCrcAycOQnulaT9Nbl3fPDJ7E7orTz0ra0S3YEN12KTgmqMn%2Bbt3iUhsUzn5U3StM%2BWY4INenyJaqavmSu5cMmkBCyaDzLS%2BqxUY2nYqhP%2FZOOP2Vmo%2FuIh6bn0Cqqju9UEJyegQOlYDD8OIbDr%2Fpk%2F1RQPiagzkmjNmvrvdOr8KgNGJ%2BJadGgHc7xBDUAidJWWvlyucUD0IRPGStidOxqAMY5eMNMWWO953Et%2FDwFkJYZWQhEi450ppGhME1f3OB%2BjN9OyJVVEUXeenlLPPdKkAPfoIAaPYXDoa59VTzMp9QhJgKUZx%2FfzE2U29ADtb6kJndx%2FoUjTQJ5wFNUOPFAHElSLF4UzQNSvbPBTe3Jv6t1SR7elwfUOtFzpPSsPG92VpRUyyeSVw8dmp87lyIwLjkpMnFejhm2PF7tdTfeM5Dqt94KbeSyVW9noLGTKWIQwUKSUZSGke%2FglZGUttdwa4v31xSCrt40BMFA0FT7TBQQBHHjIEyRmKmKM4BW7LzJ8VcSKTI6j9Z183m16xKNHtqTjJUHvryUAqjv6jAlQVM97Ge%2BAMsxQdPL7HEchDCgA%2BYAH39lCLsfGzRyZ0Ok29KwbTg26BKSmq%2BkMesZEOpvhPKVqEyxeFGRWyXLFlMLXUw8kGOqUBZ2d4iac5KFEWciGjcJdJ0CMlnWtk%2BS5ZkoD5IA7ml5DbjzcY45p9WoKwL2VNw2eI1gMQl3dQ29D%2B5kJPaLWG1jH5ek5AU7KzdbgRz11WIoJ2icZ4ILmbHRSfKtQp%2F9kb5bctKgeEqx8HV2dIsk9XQchrXZtyzlRzzvN6nuUDJbady%2BzyxnUXfFqI719RJEa9LUCDZNtOtecBU7W6ICWQxI7xDJRT&X-Amz-Signature=65a9f8a63fa6ecce4936aad22079b02bd2f4634515a0ad2ba1816c9e6d8dae95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BHL7N2J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCnB4BL7x7P6jt%2FNZoRelNh8YjqZz2UJY1n64W7wlkF1wIgEr0dW3FOKXkmFs6mFr12Yduwi3%2BcYmg9AlSBd6k%2FBC8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJQlz74wdVqiCu7dHCrcAycOQnulaT9Nbl3fPDJ7E7orTz0ra0S3YEN12KTgmqMn%2Bbt3iUhsUzn5U3StM%2BWY4INenyJaqavmSu5cMmkBCyaDzLS%2BqxUY2nYqhP%2FZOOP2Vmo%2FuIh6bn0Cqqju9UEJyegQOlYDD8OIbDr%2Fpk%2F1RQPiagzkmjNmvrvdOr8KgNGJ%2BJadGgHc7xBDUAidJWWvlyucUD0IRPGStidOxqAMY5eMNMWWO953Et%2FDwFkJYZWQhEi450ppGhME1f3OB%2BjN9OyJVVEUXeenlLPPdKkAPfoIAaPYXDoa59VTzMp9QhJgKUZx%2FfzE2U29ADtb6kJndx%2FoUjTQJ5wFNUOPFAHElSLF4UzQNSvbPBTe3Jv6t1SR7elwfUOtFzpPSsPG92VpRUyyeSVw8dmp87lyIwLjkpMnFejhm2PF7tdTfeM5Dqt94KbeSyVW9noLGTKWIQwUKSUZSGke%2FglZGUttdwa4v31xSCrt40BMFA0FT7TBQQBHHjIEyRmKmKM4BW7LzJ8VcSKTI6j9Z183m16xKNHtqTjJUHvryUAqjv6jAlQVM97Ge%2BAMsxQdPL7HEchDCgA%2BYAH39lCLsfGzRyZ0Ok29KwbTg26BKSmq%2BkMesZEOpvhPKVqEyxeFGRWyXLFlMLXUw8kGOqUBZ2d4iac5KFEWciGjcJdJ0CMlnWtk%2BS5ZkoD5IA7ml5DbjzcY45p9WoKwL2VNw2eI1gMQl3dQ29D%2B5kJPaLWG1jH5ek5AU7KzdbgRz11WIoJ2icZ4ILmbHRSfKtQp%2F9kb5bctKgeEqx8HV2dIsk9XQchrXZtyzlRzzvN6nuUDJbady%2BzyxnUXfFqI719RJEa9LUCDZNtOtecBU7W6ICWQxI7xDJRT&X-Amz-Signature=899b7425f42e85ef852adc918d6a9c5f04550fa6ff681b243aeb54394733d696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

