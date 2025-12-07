---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYUGE2X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA87jYEaXXX7KL%2BspFiSVqj1NWZdtTJmKC3PBC03GUSjAiEA2YQcgoyAc1ddmdlEMa9CGOQip6%2BxEvIaV4nE8dtYjgMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoxjlAYogMgEd7vQCrcA1FAiy5N1AgkydqB%2FSsTEdNu5DAlgyODKrcRaL8JUSLHsM3xcW8bsA0A4II%2F8PtabyDD5vK4Pog73FeUlM5nBmaNkNw8DYnlK444%2FLxVyZeSydUgJYHYmhRgXsZAf%2BQkkhb2JQXDqv29wMub7Z1%2BGJh%2FFvfK4VwOjy9%2BanKzFcUxpG3180ZwOl3jfyo6PDMuVd7N2hH%2FphJiTdnbm%2FFP55x8mDzyeseD7oAus8skxs%2Bkks2%2Fe7fwD5g2clp2nB5667uiOoRokrLZ3IktbLQPsiJvnPsQFL6ad%2BKEKP6W%2FylSccj3Cdi6iIlj4SbqVbbe%2FCNaf2d76TvPPFGE795rTBSLfeM6jAe6eoiqN8LapSvrcgBWAaqgZLCzHa2tSbrPeolX0K5OleYeaTClhEa8O7vMGhI79gexsO1FUvx7i6LLQwq1d6i5DPZvEaP0sAJ08HbEPNtdRF50k0eyyFGXoYMjETw250rHp%2B8Rov%2BSUbzesHGj37N%2BQW9JDiB9ETraTl%2FNJiC%2BxpU7N31Z9Nik6GoKaLeGbfaD4aSBzjt3a9pIs8C%2BW1yvK5gw7cnOq6Egnb2%2FvEghQhDq%2Fxd8ElbNsWCzc8ChB8MvpRHAB3HCakQD35uirnMo%2B%2FnKJhnbMLWY1MkGOqUBmg9wMf2DoIkJSgOIvHKZqdluIATWBmgYeW%2BGObU8vB6FnHCi%2BYSqD6QN5Tdnz5UiIgsOuksEPwa4i6pMOLnZXE%2BVCmdMTHZHm8n0a008GnagAAp%2F6tUHXAu21hEAkPFN532DKeQeM7G8%2B126e274ToVizmkoGZAh7iNqTegv4Gw1IyedAquOfNpbujms3ZJ%2B7JpCc2PLag43K6Ooa0mVEL6nsqtR&X-Amz-Signature=0455386394d8f22474ca61e36eab1d37fdb5d69dc34fa94d5214c81ab4ede7ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYUGE2X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA87jYEaXXX7KL%2BspFiSVqj1NWZdtTJmKC3PBC03GUSjAiEA2YQcgoyAc1ddmdlEMa9CGOQip6%2BxEvIaV4nE8dtYjgMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoxjlAYogMgEd7vQCrcA1FAiy5N1AgkydqB%2FSsTEdNu5DAlgyODKrcRaL8JUSLHsM3xcW8bsA0A4II%2F8PtabyDD5vK4Pog73FeUlM5nBmaNkNw8DYnlK444%2FLxVyZeSydUgJYHYmhRgXsZAf%2BQkkhb2JQXDqv29wMub7Z1%2BGJh%2FFvfK4VwOjy9%2BanKzFcUxpG3180ZwOl3jfyo6PDMuVd7N2hH%2FphJiTdnbm%2FFP55x8mDzyeseD7oAus8skxs%2Bkks2%2Fe7fwD5g2clp2nB5667uiOoRokrLZ3IktbLQPsiJvnPsQFL6ad%2BKEKP6W%2FylSccj3Cdi6iIlj4SbqVbbe%2FCNaf2d76TvPPFGE795rTBSLfeM6jAe6eoiqN8LapSvrcgBWAaqgZLCzHa2tSbrPeolX0K5OleYeaTClhEa8O7vMGhI79gexsO1FUvx7i6LLQwq1d6i5DPZvEaP0sAJ08HbEPNtdRF50k0eyyFGXoYMjETw250rHp%2B8Rov%2BSUbzesHGj37N%2BQW9JDiB9ETraTl%2FNJiC%2BxpU7N31Z9Nik6GoKaLeGbfaD4aSBzjt3a9pIs8C%2BW1yvK5gw7cnOq6Egnb2%2FvEghQhDq%2Fxd8ElbNsWCzc8ChB8MvpRHAB3HCakQD35uirnMo%2B%2FnKJhnbMLWY1MkGOqUBmg9wMf2DoIkJSgOIvHKZqdluIATWBmgYeW%2BGObU8vB6FnHCi%2BYSqD6QN5Tdnz5UiIgsOuksEPwa4i6pMOLnZXE%2BVCmdMTHZHm8n0a008GnagAAp%2F6tUHXAu21hEAkPFN532DKeQeM7G8%2B126e274ToVizmkoGZAh7iNqTegv4Gw1IyedAquOfNpbujms3ZJ%2B7JpCc2PLag43K6Ooa0mVEL6nsqtR&X-Amz-Signature=be93a10c95ff1b9fb2bfd2b7fb32bd32178b7e2f33522a9cfb5483737184ee90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

