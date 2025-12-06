---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRRKPH77%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcI0%2FK0wiMj9GbK7BeOrtF%2B%2BJ5AAaR5g1FoXtTSsCNWAiEAgb0DZUrWZNETP5Ftu3UUqB%2FZ26BZfDAww4o5YKDk%2Ficq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFwTMJ9QIRWegwUkbSrcAxLaT1FiUL0Ye%2FR314Xu9eHCP%2FPO53tTLiZA1nlXc4twAIaS%2FCcTF941V42fdOvxqcPhT9MxLMc3B2%2Fvv7YstadPZtx%2BgWnJXPfr8%2FGMy%2F5i0eFXrEHH4V8y%2BPrwtFVYaF1Kbx4WrF%2BXd5fGH9vegv4f4LxLxg%2FmDNf1rddkE%2BPOA0GTvW2%2FCypYSJF37z%2FjngnxXJE%2B6HYkYvLeLZijqrzn5wLejvFFmCO7auEPJiDfK9i6C8%2FckSMl15CYLCy9Nuz3ohOpx6plEbtu7%2FP3qVScV7rWdJFvg7YfzYpYgj31Qb8DxuR3n%2FPEiG4%2FYy7EV9mskK4wNg%2FSGHAFjzbizIZFpH7tO7%2BFP%2FWhMeAiHRFZWle%2Bl%2B9FF2xF7GnzXa73LxiYK6yufqVWpHvPsRra8TpWrZtVE6G4Nbu3AA0a35kwhK%2Bt6MHrfNVzBLxa7Mcpwh8x7EzFf68nIsIUCeDtSej%2B5BL%2BR6A20yxAXLLcVCKGVDrg1%2BCwYhb6GjLdDRt%2B%2B5NlKgDiHG%2BrEscTFt36MjXUPxGmgjP7pxRY2%2BcwLqT6aPeo4jSX8Xp8FbhgbdhTKyNT%2FmM5pOxoPiwF06kLA%2BcyrmgdSuJ4Hvquzeekrkk8pBG%2FNNXlaj%2B0IO6eMMHK0ckGOqUBdBNHJNwgjU6fnCzCoZQR33pqkPCnTKZSjeZ2gnRTfg%2BYkakWu8eA3kpJqGu7lJ1a%2BsPN%2BcsVa1uG%2FQ%2Byc9pdCzWM3F81ecrLLuMldx7D7ddI0Oo7WMv1JaPbj%2BrSUpgV2U7aWDmbdv%2FuPqh5vkjqaZNUcbBhfzy9PUaHpPHugv5BnNBdIp0j3sGWgkx7Y5iz8t89cBmilkupqe857ZXP%2BBvVqA%2Ff&X-Amz-Signature=41d27edb693af18fe5ce18103925cb01d1a0f3a956d51da77a294ab44d4c993b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRRKPH77%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcI0%2FK0wiMj9GbK7BeOrtF%2B%2BJ5AAaR5g1FoXtTSsCNWAiEAgb0DZUrWZNETP5Ftu3UUqB%2FZ26BZfDAww4o5YKDk%2Ficq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFwTMJ9QIRWegwUkbSrcAxLaT1FiUL0Ye%2FR314Xu9eHCP%2FPO53tTLiZA1nlXc4twAIaS%2FCcTF941V42fdOvxqcPhT9MxLMc3B2%2Fvv7YstadPZtx%2BgWnJXPfr8%2FGMy%2F5i0eFXrEHH4V8y%2BPrwtFVYaF1Kbx4WrF%2BXd5fGH9vegv4f4LxLxg%2FmDNf1rddkE%2BPOA0GTvW2%2FCypYSJF37z%2FjngnxXJE%2B6HYkYvLeLZijqrzn5wLejvFFmCO7auEPJiDfK9i6C8%2FckSMl15CYLCy9Nuz3ohOpx6plEbtu7%2FP3qVScV7rWdJFvg7YfzYpYgj31Qb8DxuR3n%2FPEiG4%2FYy7EV9mskK4wNg%2FSGHAFjzbizIZFpH7tO7%2BFP%2FWhMeAiHRFZWle%2Bl%2B9FF2xF7GnzXa73LxiYK6yufqVWpHvPsRra8TpWrZtVE6G4Nbu3AA0a35kwhK%2Bt6MHrfNVzBLxa7Mcpwh8x7EzFf68nIsIUCeDtSej%2B5BL%2BR6A20yxAXLLcVCKGVDrg1%2BCwYhb6GjLdDRt%2B%2B5NlKgDiHG%2BrEscTFt36MjXUPxGmgjP7pxRY2%2BcwLqT6aPeo4jSX8Xp8FbhgbdhTKyNT%2FmM5pOxoPiwF06kLA%2BcyrmgdSuJ4Hvquzeekrkk8pBG%2FNNXlaj%2B0IO6eMMHK0ckGOqUBdBNHJNwgjU6fnCzCoZQR33pqkPCnTKZSjeZ2gnRTfg%2BYkakWu8eA3kpJqGu7lJ1a%2BsPN%2BcsVa1uG%2FQ%2Byc9pdCzWM3F81ecrLLuMldx7D7ddI0Oo7WMv1JaPbj%2BrSUpgV2U7aWDmbdv%2FuPqh5vkjqaZNUcbBhfzy9PUaHpPHugv5BnNBdIp0j3sGWgkx7Y5iz8t89cBmilkupqe857ZXP%2BBvVqA%2Ff&X-Amz-Signature=db1a9d52698ccebebb9e372971b0077d64f44355771384b50ecbc0fb2165db9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

