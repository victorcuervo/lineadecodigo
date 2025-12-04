---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW2626QT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFyzoNNqOwXoe6d8pUBz9rWRwPK%2BhqiZYGfS3%2FfyXWbgAiEAprN3Gn6RlBFIJwPsnJ4L%2FMoYop8q503itSf154Sug3Qq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFx5VRsT%2Bq5%2B97%2FwJircA0%2FDhjwCmXhA7c2xHw9jrNgbbnF3ILuiWllvgn3Um%2Fpxx5aCZLRyiIBQqDFqvI6xqyyIP5%2Fyewuy2sxikYjyk928PfrcV9myqObjJ69g5Jo5ui7Ovd3FYmB4JpoT0sNISmeIgmN8E1BJ37YYcBMLjpG%2BjE07cTyBl7XD3cUK1Guou1FwRdYMXs8Wd7TJA%2BulJ%2BYnmBxH1PPBJHvOCFjDi3Aktd9a%2FFxewNfnDaq%2B0q2lHpUp3XbVqH%2BeZw7bOwn4rF0lGUEMt8Esrh%2FVe5HG8GJ6r7icZvldqgYwpbcb3opWZpRkIzqT4svGLsfC%2Fu6P%2FvQj58WXeRhOq3isKlIWKWT2F%2Bnokloh0O%2Fxrt1gKIqtHwEbyw0j0RsoV7DoAxq1NdnD0kdYi89Wbq7gkciMThr%2BuLNrKmaq2utqUjn%2F3zdI6al7RJyPKifdnaKlX2RqOcfJfIabV0oeFvdHyn0MQiGOX7Z4VD%2FgwqM1Eh3p6NxrhmSEtVhe1brk1PBwnCZx%2FiQ9Lw5FIs8GVJRPr%2FngKeG2H42BCtcyE1gBF366L%2FNlJf%2Bt607Qnt7cahyWN%2FA02SD7HKD6m3XhmQ11WkC4GXTa%2BGOWWoacfYdeLxn%2BNNYdn8eIqqr10hKrjxUaMKvUw8kGOqUBFG81WngSApsYfvyk%2FY9%2FeiIfATkkyQ5mBB7mh%2FCW89k31wM5yOkNpZkkLIqD7bBHAXNfSWSsJwFz0xgKjrJ6fUYWi1O4Zl8CYNjaW0gwLejNcIIOsNTvg7UZrLnWUJGAoehZwi6BsNfhgMEV3rBdSXDSFls9uaxih1HyRHMIu7a2MmKQLfsYPlsSs5eTBfp6SOaX2%2FAowTwUdzi2xDu5NpjL9iVs&X-Amz-Signature=ea738e665a549cad25f7a7337da982b4489c1723915ef1540177a490bc9b2e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW2626QT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFyzoNNqOwXoe6d8pUBz9rWRwPK%2BhqiZYGfS3%2FfyXWbgAiEAprN3Gn6RlBFIJwPsnJ4L%2FMoYop8q503itSf154Sug3Qq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFx5VRsT%2Bq5%2B97%2FwJircA0%2FDhjwCmXhA7c2xHw9jrNgbbnF3ILuiWllvgn3Um%2Fpxx5aCZLRyiIBQqDFqvI6xqyyIP5%2Fyewuy2sxikYjyk928PfrcV9myqObjJ69g5Jo5ui7Ovd3FYmB4JpoT0sNISmeIgmN8E1BJ37YYcBMLjpG%2BjE07cTyBl7XD3cUK1Guou1FwRdYMXs8Wd7TJA%2BulJ%2BYnmBxH1PPBJHvOCFjDi3Aktd9a%2FFxewNfnDaq%2B0q2lHpUp3XbVqH%2BeZw7bOwn4rF0lGUEMt8Esrh%2FVe5HG8GJ6r7icZvldqgYwpbcb3opWZpRkIzqT4svGLsfC%2Fu6P%2FvQj58WXeRhOq3isKlIWKWT2F%2Bnokloh0O%2Fxrt1gKIqtHwEbyw0j0RsoV7DoAxq1NdnD0kdYi89Wbq7gkciMThr%2BuLNrKmaq2utqUjn%2F3zdI6al7RJyPKifdnaKlX2RqOcfJfIabV0oeFvdHyn0MQiGOX7Z4VD%2FgwqM1Eh3p6NxrhmSEtVhe1brk1PBwnCZx%2FiQ9Lw5FIs8GVJRPr%2FngKeG2H42BCtcyE1gBF366L%2FNlJf%2Bt607Qnt7cahyWN%2FA02SD7HKD6m3XhmQ11WkC4GXTa%2BGOWWoacfYdeLxn%2BNNYdn8eIqqr10hKrjxUaMKvUw8kGOqUBFG81WngSApsYfvyk%2FY9%2FeiIfATkkyQ5mBB7mh%2FCW89k31wM5yOkNpZkkLIqD7bBHAXNfSWSsJwFz0xgKjrJ6fUYWi1O4Zl8CYNjaW0gwLejNcIIOsNTvg7UZrLnWUJGAoehZwi6BsNfhgMEV3rBdSXDSFls9uaxih1HyRHMIu7a2MmKQLfsYPlsSs5eTBfp6SOaX2%2FAowTwUdzi2xDu5NpjL9iVs&X-Amz-Signature=dabc69e9095b24e945a311b5a6a53d07086435f66cc9dc27d621b3fcbed45465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

