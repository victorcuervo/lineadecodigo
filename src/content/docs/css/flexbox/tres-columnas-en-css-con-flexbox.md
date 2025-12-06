---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMRFPMX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8yEHO%2F92B29zc3S5UwFhV3%2FDcm%2FhlP%2FaJiYglUyI7aQIhANUXBm64lt%2Fvnq4rcDycoT5AHZVsHB1SoS5WwyS%2Brvm1Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxWV42E2R6ozKYtMU4q3AOiT7CUYwrFAph8ipfNTHPtVHS5ZqoWfsH40DIyhO%2BytShBermqV2cHZhStN2uGv9ZTjClM5vMtMuPDCl2wu%2BgK2IMgU06N5MC0GpDrH4GhALsoARpv6ypVTIzchrk9mCbBySdU8HG8mvYSXG8VQUkzacfChO7Rij60V8P7wCMp28Tp6kRArEIT9DVguoRpOvV%2B1LJFhjXHUqSccWcJcYxrgqxhFNlcl4aeiGxbrM0oVdJAhFPwUkvGT%2BiFu%2FIGDiOGeC74lZWpAtvljExj1Ct0nFhRe2XdXuxbXVSIELNsyYcub9ItlK6YHvRlyJjVgL8GI4CgUQp5FP0LBVInWl8nOVP9PLoJDh%2BemTqeC2ymEDdigOErqGYuP0VKqjqKdqxW93HfJPKO%2BOgYgv3LuXXn1AMx5S0q2%2FMFGqrPtGjB4%2FCy74UeYixd3ldkxaO8SCysesF8Gjg3SZksOS0hrGFMHqjWwx7LgrXksH5%2FEg6AyMTq1insM3wdNceiCPQqjDJj441kHgm3NynldYWQ5pK1G6RGml4ahlt09cKhiM2hBCcFPCtDEpva%2B%2F4RQ8ZGuElsu0pzoKIZbP8DBJhnAtJSNxDVQsnr%2F7gFNZPKrq50aAbmBBvk8ds0Hu6NEjDsptDJBjqkARuCkFm64VFz7nezRjS7iS3W6SzDVewrQeTFwdludvSYsPBzYGzPDaMJkpczi6dJXdtvuG%2Bqpkz5Z6%2Bo3HZmlMiBqMlivlvlZNFFAazmgLrHT7Gmnh8J%2BfkyjHSJ2EAPS4j3tY1ioBGmwh45ZcjpjrjZoq3iu1vi74%2FMjVhhcFjLl6QIn7GTVF%2BQUrS03LkH9lldcmT0kUybEvOJF4dTFtyTpBzx&X-Amz-Signature=f85fe18ddf6af77e78ca3d6f861be0f173c838420441c9b214619b97beedb317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMRFPMX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8yEHO%2F92B29zc3S5UwFhV3%2FDcm%2FhlP%2FaJiYglUyI7aQIhANUXBm64lt%2Fvnq4rcDycoT5AHZVsHB1SoS5WwyS%2Brvm1Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxWV42E2R6ozKYtMU4q3AOiT7CUYwrFAph8ipfNTHPtVHS5ZqoWfsH40DIyhO%2BytShBermqV2cHZhStN2uGv9ZTjClM5vMtMuPDCl2wu%2BgK2IMgU06N5MC0GpDrH4GhALsoARpv6ypVTIzchrk9mCbBySdU8HG8mvYSXG8VQUkzacfChO7Rij60V8P7wCMp28Tp6kRArEIT9DVguoRpOvV%2B1LJFhjXHUqSccWcJcYxrgqxhFNlcl4aeiGxbrM0oVdJAhFPwUkvGT%2BiFu%2FIGDiOGeC74lZWpAtvljExj1Ct0nFhRe2XdXuxbXVSIELNsyYcub9ItlK6YHvRlyJjVgL8GI4CgUQp5FP0LBVInWl8nOVP9PLoJDh%2BemTqeC2ymEDdigOErqGYuP0VKqjqKdqxW93HfJPKO%2BOgYgv3LuXXn1AMx5S0q2%2FMFGqrPtGjB4%2FCy74UeYixd3ldkxaO8SCysesF8Gjg3SZksOS0hrGFMHqjWwx7LgrXksH5%2FEg6AyMTq1insM3wdNceiCPQqjDJj441kHgm3NynldYWQ5pK1G6RGml4ahlt09cKhiM2hBCcFPCtDEpva%2B%2F4RQ8ZGuElsu0pzoKIZbP8DBJhnAtJSNxDVQsnr%2F7gFNZPKrq50aAbmBBvk8ds0Hu6NEjDsptDJBjqkARuCkFm64VFz7nezRjS7iS3W6SzDVewrQeTFwdludvSYsPBzYGzPDaMJkpczi6dJXdtvuG%2Bqpkz5Z6%2Bo3HZmlMiBqMlivlvlZNFFAazmgLrHT7Gmnh8J%2BfkyjHSJ2EAPS4j3tY1ioBGmwh45ZcjpjrjZoq3iu1vi74%2FMjVhhcFjLl6QIn7GTVF%2BQUrS03LkH9lldcmT0kUybEvOJF4dTFtyTpBzx&X-Amz-Signature=e9b168ab372985e3de24466b878e49c4ebc411e16642d1e02086efdf248225b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

