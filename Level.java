import java.util.*;

/** This class is where the Experience points and the data get processed for
 *  our level up scheme in our work out application, WarmUp.
 *
 *  @author Chris Robinson, Elaine Nguyen, Bradley Tran
 *  Created February 16, 2020
 *
 */
public class Level
{
    private int currentExp;
    private int currentLevel;
    private int expUntilNextLevel;
    private HashMap awardMap;

    //constructor
    public Level( int currentExp ){
        awardMap = new HashMap<String, Integer>();
        this.currentExp = currentExp;
        setupHashMap();
        calculateLevel(currentExp);
    }

    //create the hashmap
    private void setupHashMap(){

        //replenishing achievements
        this.awardMap.put("COMPLETED_WORKOUT", 45);
        this.awardMap.put("TRIED_NEW_ROUTINE", 75);

        //weekly achievements
        this.awardMap.put("WENT_TO_GYM_ONCE", 25);
        this.awardMap.put("WENT_TO_GYM_TWICE", 35);
        this.awardMap.put("WENT_TO_GYM_THRICE", 45);
        this.awardMap.put("WENT_TO_GYM_FOUTH", 55);
        this.awardMap.put("WENT_TO_GYM_FIFTH", 65);

        //one time achievements
        this.awardMap.put("FACEBOOK_LOGIN", 50);
        this.awardMap.put("FIRST_ROUTINE", 100);
        this.awardMap.put("FIVE_ROUTINES", 100);
        this.awardMap.put("TEN_ROUTINES", 100);
        this.awardMap.put("FIFTY_ROUTINES", 100);
        this.awardMap.put("HUNDRED_ROUTINES", 100);
        this.awardMap.put("HUNDREDFIFTY_ROUTINES", 100);
        this.awardMap.put("TWOHUNDRED_ROUTINES", 100);
        this.awardMap.put("THREEHUNDRED_ROUTINES", 100);
        this.awardMap.put("FIVEHUNDRED_ROUTINES", 100);

    }

    //currently the levels go up at a rate of 4x^3/5, based on the 
    //fast exp types model in Pokemon
    public void calculateLevel(int currentExp){
        this.currentLevel = Math.cbrt(currentExp*(5/4));
        this.expUntilNextLevel = (4*(Math.pow(3, currentLevel+1)/5)) - currentExp;
    }
  
    public int getCurrentExp(){
        return this.currentExp;
    }

    public int getCurrentLevel(){
        return this.currentLevel;
    }

    public int getExpUntilNextLevel(){
        return this.expUntilNextLevel;
    }
    
    public static void main( String[] args )
    {
        //Testing

        return;
    }
}
