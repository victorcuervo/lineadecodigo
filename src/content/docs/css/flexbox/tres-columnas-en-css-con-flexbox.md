---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRIFHWZX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqQOtyuEqIjI4n7nWHnB3AmVqLBHhMCUxOB6FoKA4hswIgDobPlPlClIPvH8qgJgXIb0BE2BKfQxVE1PG6DhlH0fwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKjLZfn7mbPVcARLDyrcA73MwecRgwnHfj75igK%2BnqjF6nMg0JUb5JS%2Bz3YSHbjyF8%2FBl4IZkX2kAeHxl9829%2BE1SifCuB%2FHBZRcFCVW7FyZ04eu0QKtj1rJRb0m%2FZtto%2BZnGFyVV3g7lx7hjhdl2MSw2%2BPGksX3ssDjBHmWV64%2FIq2%2FtA9Fyh49EBP%2BedU%2FdypebwXASSWYWlX1P%2FVwrH3Xj%2BffxpelfLc9Qh0dW3c6GmFOAFY4Bl88NoIrOAJBBfxMk2A64xOFS%2F88L1PFRHvj5k79hf4eFake1Jm90ToiEV2Zg3c2CYTHYeNOTzxVVCA9AJUUBNl6qA%2FDtPuJnlt0sUijS9Ri8Eee45rcV3Qq%2Fv%2Ff9RCNAZA7M%2BS9BShdaeiUbWrQU1sK6l0D9Fy6jTEvFbdsK4Sy%2F6J9cQZTINJ0Di1AkgrV5TbhIDhfKLAaHeHM0jdgULYl7pF3rT%2BibMt%2FIXUAdUucondITYLp6rmLEOQnV5Xx0Zw%2By0nIEdx4KpuS7MRwqgy170%2BVXQnqXQB3U%2BBtEPgmtJiqpD0EdEjnBJYgHf%2B%2FBgG299D2z2oKRCIWFPmh%2F611qPPO8OVE5A%2B1F07yTPNDe0C1iMpuAha9XKKYUyUzjzz%2B5kSj2hBKK%2B89h41sEN9kh0NuMKrozckGOqUBPaAN8lm9IBsJ0laGgSq2CSf7%2BFQI%2F%2BTE2peRq3jKD5UixL1c2HNgoYTh3rf9TZ6hKhUbFvpCFrQZwrEamK2lz5aj24HrBW9M2FqVspgsWyEaWegLEFKPdTiIChZMgbTcX%2BkKhwT3J9J%2FNnx3jDnrWhgtyai4pml5BSM%2B5v7TWODCbzm%2BMCN3v9ox2%2F2FvF6Og3kN2LVu7hqIoUabVXf%2BF45DjtTp&X-Amz-Signature=67d7865b00638aa2910488a12da1999da7d1bed5db3e8d5fc6d14fa32cda8161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRIFHWZX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqQOtyuEqIjI4n7nWHnB3AmVqLBHhMCUxOB6FoKA4hswIgDobPlPlClIPvH8qgJgXIb0BE2BKfQxVE1PG6DhlH0fwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKjLZfn7mbPVcARLDyrcA73MwecRgwnHfj75igK%2BnqjF6nMg0JUb5JS%2Bz3YSHbjyF8%2FBl4IZkX2kAeHxl9829%2BE1SifCuB%2FHBZRcFCVW7FyZ04eu0QKtj1rJRb0m%2FZtto%2BZnGFyVV3g7lx7hjhdl2MSw2%2BPGksX3ssDjBHmWV64%2FIq2%2FtA9Fyh49EBP%2BedU%2FdypebwXASSWYWlX1P%2FVwrH3Xj%2BffxpelfLc9Qh0dW3c6GmFOAFY4Bl88NoIrOAJBBfxMk2A64xOFS%2F88L1PFRHvj5k79hf4eFake1Jm90ToiEV2Zg3c2CYTHYeNOTzxVVCA9AJUUBNl6qA%2FDtPuJnlt0sUijS9Ri8Eee45rcV3Qq%2Fv%2Ff9RCNAZA7M%2BS9BShdaeiUbWrQU1sK6l0D9Fy6jTEvFbdsK4Sy%2F6J9cQZTINJ0Di1AkgrV5TbhIDhfKLAaHeHM0jdgULYl7pF3rT%2BibMt%2FIXUAdUucondITYLp6rmLEOQnV5Xx0Zw%2By0nIEdx4KpuS7MRwqgy170%2BVXQnqXQB3U%2BBtEPgmtJiqpD0EdEjnBJYgHf%2B%2FBgG299D2z2oKRCIWFPmh%2F611qPPO8OVE5A%2B1F07yTPNDe0C1iMpuAha9XKKYUyUzjzz%2B5kSj2hBKK%2B89h41sEN9kh0NuMKrozckGOqUBPaAN8lm9IBsJ0laGgSq2CSf7%2BFQI%2F%2BTE2peRq3jKD5UixL1c2HNgoYTh3rf9TZ6hKhUbFvpCFrQZwrEamK2lz5aj24HrBW9M2FqVspgsWyEaWegLEFKPdTiIChZMgbTcX%2BkKhwT3J9J%2FNnx3jDnrWhgtyai4pml5BSM%2B5v7TWODCbzm%2BMCN3v9ox2%2F2FvF6Og3kN2LVu7hqIoUabVXf%2BF45DjtTp&X-Amz-Signature=12498e7acd4525060ae5f7a15d5fe5bfdb4e7619f4728a9db6cdb41aa0092d6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

